import React, { useContext, useState } from 'react'
import img from "../../assets/others/authentication1.png"
import { Link, useNavigate } from 'react-router-dom'
import { authProvider } from '../../Context/AuthContext'
import Swal from 'sweetalert2'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import GmailSignUp from '../../components/GmailSignUp/GmailSignUp'


// import '../Login/Login.css'
export default function SignUp() {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const { createUser, updateProfile } = useContext(authProvider)
    const [formData, setFormdata] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChangeForm = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        setFormdata({ ...formData, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData);
        await createUser(formData.email, formData.password).then((userCredential) => {
            const user = userCredential.user;
            const userInfo = { name: formData.name, email: formData.email }
            axiosPublic.post('/users', userInfo).then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Account is created!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'yes',
                        timer: 1500

                    })
                    navigate('/')
                }

            })

            // updateProfile(formData.name).then(() => {
            //     Swal.fire({
            //         title: 'Account is created!',
            //         text: 'Do you want to continue',
            //         icon: 'success',
            //         confirmButtonText: 'yes',
            //         timer: 1500

            //     })
            //     navigate('/')
            // })
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
        //reset form data
        setFormdata({ name: '', email: '', password: '' })

    }

    return (
        <div>
            <div className="hero  py-20">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" />
                    </div>

                    <div className="card  w-full max-w-sm shrink-0 ">
                        <h1 className='text-center text-2xl font-bold'>Sign UP</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' value={formData.name} onChange={(e) => handleChangeForm(e)} type="text" placeholder="type here" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' value={formData.email} onChange={(e) => handleChangeForm(e)} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' value={formData.password} onChange={(e) => handleChangeForm(e)} type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control  mt-6">
                                <button className="btn bg-orange-300 text-white">Sign Up</button>
                            </div>
                            <p className='text-center text-orange-400'><small className='mr-1'>Already User?
                            </small><Link to="/login"><small>Login to your account</small></Link></p>
                            <div class="flex w-full flex-col">
                                <div class="divider">Or</div>
                            </div>
                            <GmailSignUp />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
