import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavigationBar from '../shared/NavigationBar/NavigationBar';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login')
    return (
        <div>
            {
                !isLogin ? <NavigationBar /> : null
            }
            <Outlet />
            <Footer />
        </div>


    )

}

export default Main;