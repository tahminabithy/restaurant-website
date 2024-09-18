import React, { useContext, useState } from 'react'
import img from "../../assets/others/authentication2.png"
import Cover from '../../shared/Cover/Cover'
import './Login.css'
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { authProvider } from '../../Context/AuthContext';
import GmailSignUp from '../../components/GmailSignUp/GmailSignUp';
export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(location?.state);
    const [disable, setDisable] = useState(true)
    const { signIn } = useContext(authProvider)
    const [formData, setFormdata] = useState({
        email: '',
        password: ''
    })
    // function onChange(value) {
    //     console.log("Captcha value:", value);
    //     if (value) {
    //         setDisable(false);
    //     }
    // }
    // ------------------
    const handleChangeForm = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setFormdata({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        signIn(formData.email, formData.password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert(errorMessage)
            });


        setFormdata({ email: '', password: '' })
        navigate(from, { replace: true });
    }



    return (
        <div className="bg-img">

            {/* ------------------------------------------------------- */}
            <div className="hero  py-20">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" />
                    </div>

                    <div className="card  w-full max-w-sm shrink-0 ">
                        <h1 className='text-center text-2xl font-bold'>Login</h1>
                        <form onSubmit={handleSubmit} className="card-body">
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
                            {/* <div className="form-control mt-4">
                             
                                <ReCAPTCHA
                                    sitekey="6Lf4iEcqAAAAAEjcjMskjh0HvfCZceYNodxiN4I3"
                                    onChange={onChange}
                                />


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Reload Captcha</a>
                                </label>
                            </div> */}
                            {/* {
                                disable ? <div className="form-control  mt-6">
                                    <button disabled className=" btn bg-orange-300 text-white">Sign In</button>
                                </div> : <div className="form-control  mt-6">
                                    <button className="btn bg-orange-300 text-white">Sign In</button>
                                </div>
                            } */}
                            <div className="form-control  mt-6">
                                <button disabled={disable} className="btn bg-orange-300 text-white">Sign In</button>
                            </div>
                            <p className='text-center text-orange-400'><small className='mr-1'>New here?</small>
                                <Link to="/signUp"><small>create a new account</small></Link></p>
                            <div className="flex w-full flex-col">
                                <div className="divider">Or</div>
                            </div>
                            <GmailSignUp />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
// 6LdU1hwqAAAAAJQNAEfykQQTfipScITb7EvvKg0W
// 6Lcy1hwqAAAAANddZ7IGLwsm-liwdBNVsltg06qr
