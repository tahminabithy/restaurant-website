import React from 'react'
import SecTitle from '../../../components/SecTitle/SecTitle'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useMenu from '../../../hooks/useMenu';
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function ManageItems() {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = async (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${id}`)
                console.log(res.data);
                if (res.data.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            }
        });


    }
    return (
        <div className='p-8'>
            <SecTitle heading="Hurry Up!" subHeading='Manage All Items' />
            {/* -------------------------------------- */}
            <div className="overflow-x-auto p-12 my-6 shadow-lg">
                <h2>Total Items:{menu?.length}</h2>
                <table className="table mt-8">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu?.map(eachItem => (
                                <tr key={eachItem._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={eachItem.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {eachItem.name}

                                    </td>
                                    <td>{eachItem.price}</td>
                                    <th>
                                        <Link to={`/dashboard/updateItems/${eachItem._id}`}>
                                            <button className="btn btn bg-orange-300 btn-xs text-white btn-md"><FaPenToSquare /></button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeleteItem(eachItem._id)} className="btn btn bg-red-600 btn-xs text-white btn-md"><FaTrashCan /></button>
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>
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
    )
}

export default ManageItems
