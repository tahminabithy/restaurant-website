import React from 'react'
import { useCarts } from '../../../hooks/UseCarts'
import { FaBinoculars, FaCircleXmark, FaCopy, FaCross, FaDeleteLeft, FaMoneyBill, FaPenClip, FaTrashCan } from 'react-icons/fa6';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function Dcart() {
    const axiosSecure = useAxiosSecure();
    const [carts, refetch] = useCarts();
    const handleClick = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`cart/${id}`).then(res => {
                    console.log(res)
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }

                }
                )
            }
        });
    }
    return (
        <>
            <div className='p-20'>
                <div className='flex justify-center items-center'>
                    <div className='border-y-2 w-72'>
                        <h3 className='text-center mb-6 text-3xl mt-4'>Manage All Items</h3>
                    </div>
                </div>

                <div className="overflow-x-auto mt-10 shadow-2xl p-10">
                    <div className='flex justify-between'>
                        <h1 className='mb-4 font-bold'>TOTAL ITEMS: {carts.length}</h1>
                        <Link to="/dashboard/payment">
                            <button className="btn border-b-4 border-[#BB8506] bg-orange-300  hover:border-[#BB8506] mb-6"><FaMoneyBill />Pay</button>
                        </Link>

                    </div>

                    <table className="table">
                        {/* head */}
                        <thead className='bg-orange-300'>
                            <tr className='bg-orange-300'>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Item Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                {/* <th>Action</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                carts.map(cart => (
                                    <tr key={cart._id}>
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
                                                            src={cart.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{cart.name}</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {cart.name}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>${cart.price}</td>
                                        {/* <th>
                                            <button className="btn btn bg-orange-300 btn-xs"><FaPenClip /></button>
                                        </th> */}
                                        <th>
                                            <button onClick={() => handleClick(cart._id)} className="btn btn bg-red-600 btn-xs text-white"><FaTrashCan /></button>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}
