import React from 'react'
import SecTitle from '../../../components/SecTitle/SecTitle'
import { useForm } from 'react-hook-form'
import { FaUtensils } from 'react-icons/fa6'
import { useLoaderData, useParams } from 'react-router-dom'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'

export default function UpdateItems() {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const item = useLoaderData();
    console.log(item);

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const res = await axiosSecure.patch(`/menu/${id}`, data)
        console.log(res.data);
        if (res.data.modifiedCount) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} has been updated`,
                showConfirmButton: false,
                timer: 1000
            });
            reset();
        }

    }
    return (
        <div className='p-8'>
            <h1 className='text-3xl text-center mt-8'>UPDATE ITEM</h1>
            {/* form  */}
            <div className='flex justify-center'>
                <form className='my-8 w-full  md:w-1/2' onSubmit={handleSubmit(onSubmit)}>
                    <span className="text-sm">Recipe name*</span>
                    <input defaultValue={item.name} type="text" placeholder="Recipe name" className="w-full input input-bordered my-4" {...register("name")} />
                    <br />
                    <div className='flex'>
                        <select defaultValue={item.category} required {...register("category")} className="select select-bordered w-1/2 ">
                            <option defaultValue={item.category} >Catagory*</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Desserts</option>
                            <option value="drink">Drink</option>
                            <option value="Others">Other</option>
                        </select>
                        <input defaultValue={item.price} required type="text" placeholder="Price*" className="ml-4 input input-bordered w-1/2" {...register("price")} />
                    </div>
                    <br />
                    <textarea
                        defaultValue={item.recipe}
                        {...register("recipe")}
                        placeholder="Recipe Details"
                        className="h-40 textarea textarea-bordered textarea-lg w-full ">
                    </textarea>

                    <div className='flex justify-center'>
                        <button className=' btn border-b-4 border-[#BB8506] text-[#BB8506] hover:bg-[#111827] hover:border-[#BB8506] mt-4' type="submit">Update recipe details <FaUtensils /></button>
                    </div>
                </form>
            </div>


        </div>
    )
}
