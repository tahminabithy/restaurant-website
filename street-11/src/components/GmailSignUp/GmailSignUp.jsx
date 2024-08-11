import { FaGoogle } from 'react-icons/fa6'
import { authProvider } from '../../Context/AuthContext'
import { useContext } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

export default function GmailSignUp() {
    const { signInWithGmail, facebookSignIn } = useContext(authProvider)
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()
    const handleGmailUser = () => {
        signInWithGmail().then(result => {
            console.log(result);
            const userInfo = {
                name: result?.user?.displayName,
                email: result?.user?.email,
                // photo: result.user.photoURL
            }
            axiosPublic.post('/users', userInfo).then(res => {
                console.log(res);
                navigate('/')
            })
        })
    }
    return (
        < div className='flex justify-center items-center'>
            <button onClick={handleGmailUser} className="btn rounded-full border border-gray-500 ">
                <FaGoogle /> Sign Up with Google
            </button>
        </div>
    )
}
