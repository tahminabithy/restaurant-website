import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useAxiosPublic from '../hooks/useAxiosPublic';
export const authProvider = createContext(null);
function AuthContext({ children }) {
    const provider = new GoogleAuthProvider();
    // const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth(app);
    const axiosPublic = useAxiosPublic();
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setloading(true)
            setuser(user)
            console.log("currentuser", user);

            const userInfo = {
                email: user?.email
            }
            if (user) {
                axiosPublic.post('/jwt', userInfo).then(res => {
                    if (res.data.token) {
                        localStorage.setItem('access_token', res.data?.token)
                    }
                    setloading(false)
                })
            }
            else {
                localStorage.removeItem('access_token')
                setloading(false)
            }

        })
        return unsub
    }, [axiosPublic])
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGmail = () => {
        setloading(true)
        return signInWithPopup(auth, provider)
    }
    // const facebookSignIn = () => {
    //     setloading(true)
    //     return signInWithPopup(auth, facebookProvider)

    // }

    const updateProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateProfile,
        signInWithGmail,

    }
    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    )
}

export default AuthContext
