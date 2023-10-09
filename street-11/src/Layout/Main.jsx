import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../shared/NavigationBar/NavigationBar';
import Footer from '../shared/Footer/Footer';

const Main = () => {

    return(
        <div> 
         <NavigationBar/>
         <Outlet/>
         <Footer/>
        </div>
       

    )

}

export default Main;