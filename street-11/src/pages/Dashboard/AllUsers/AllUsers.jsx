import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import { FaTrashCan, FaUser } from 'react-icons/fa6';
import Swal from 'sweetalert2';

export default function AllUsers() {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            });
            console.log("user value for authorized", res.data);
            return res.data;
        }
    })
    const handleUserDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/${id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        console.log(res);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                            timer: 1000
                        });
                    }

                })

            }
        });

    }
    const handleUserRole = (id) => {
        console.log(id);

        Swal.fire({
            // title: "Are you sure?",
            text: "Do you want the user to be admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/admin/${id}`).then(res => {
                    console.log(res);
                    if (res.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            // // title: "Deleted!",
                            // text: `${user.name} is now an admin`,
                            icon: "success",
                            timer: 1000
                        });
                    }
                })

            }
        });
    }
    return (
        <>
            <div className='p-20'>
                <div className='flex justify-center items-center'>
                    <div className='border-y-2 w-72'>
                        <h3 className='text-center mb-6 text-3xl mt-4'>Manage Users</h3>
                    </div>
                </div>
                <div className="overflow-x-auto mt-10 shadow-2xl p-10">
                    <h1 className='mb-4 font-bold'>TOTAL Users: {users.length}</h1>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='bg-orange-300'>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => (
                                        <tr key={user._id}>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{user.name}</div>
                                                        <div className="text-sm opacity-50">United States</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Zemlak, Daniel and Leannon
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                            </td>
                                            <th>
                                                {
                                                    user.role === "admin" ? "Admin" : <button onClick={() => handleUserRole(user._id)} className="btn btn bg-orange-300 btn-xs text-white btn-md"><FaUser /></button>
                                                }
                                            </th>
                                            <th>
                                                <button onClick={() => handleUserDelete(user._id)} className="btn btn bg-red-600 btn-xs text-white btn-md"><FaTrashCan /></button>
                                            </th>
                                        </tr>
                                    ))
                                }

                            </tbody>
                            {/* foot */}
                            {/* <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </tfoot> */}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}


