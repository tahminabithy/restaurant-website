import React from 'react'
import { useForm } from "react-hook-form"
import SecTitle from '../../../components/SecTitle/SecTitle'
import { FaUtensils } from 'react-icons/fa6'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import Swal from 'sweetalert2'

const apiKey = import.meta.env.VITE_IMAGE_API_KEY
const hostingApi = `https://api.imgbb.com/1/upload?key=${apiKey}`
export default function AddItems() {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        const imgFile = { image: data.image[0] }
        const res = await axiosPublic.post(hostingApi, imgFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res);
        if (res.data.success) {
            const item = {
                name: data.name,
                category: data.category,
                price: data.price,
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            axiosSecure.post('/menu', item).then(res => {
                console.log(res.data);
                {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Item added successfully",
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                }
            })
        }
    }


    return (
        <div className='p-8'>

            <SecTitle heading="what's new" subHeading="ADD AN ITEM" />
            {/* form  */}
            <div className='flex justify-center'>
                <form className='my-8 w-full  md:w-1/2' onSubmit={handleSubmit(onSubmit)}>
                    <span className="text-sm">Recipe name*</span>
                    <input type="text" placeholder="Recipe name" className="w-full input input-bordered my-4" {...register("name")} />
                    <br />
                    <div className='flex'>
                        <select required {...register("category")} className="select select-bordered w-1/2 ">
                            <option selected >Catagory*</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Desserts</option>
                            <option value="drink">Drink</option>
                            <option value="Others">Other</option>
                        </select>
                        <input required type="text" placeholder="Price*" className="ml-4 input input-bordered w-1/2" {...register("price")} />
                    </div>
                    <br />
                    <textarea
                        {...register("recipe")}
                        placeholder="Recipe Details"
                        className="h-40 textarea textarea-bordered textarea-lg w-full ">
                    </textarea>
                    <input   {...register("image")} type="file" className="file-input w-full mt-4" />
                    <div className='flex justify-center'>
                        <button className=' btn border-b-4 border-[#BB8506] text-[#BB8506] hover:bg-[#111827] hover:border-[#BB8506] mt-4' type="submit">Add item <FaUtensils /></button>
                    </div>
                </form>
            </div>


        </div>
    )
}
