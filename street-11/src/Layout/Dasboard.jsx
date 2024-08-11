import React from 'react'
import { FaAlignJustify, FaBasketShopping, FaBook, FaBucket, FaEnvelope, FaHouse, FaList, FaMoneyBill, FaNoteSticky, FaStarOfLife, FaUsers, FaUtensils } from 'react-icons/fa6'
import { NavLink, Outlet } from 'react-router-dom'
import useAdmin from '../hooks/useAdmin'

export default function Dashboard() {
    const [isAdmin] = useAdmin();
    // const isAdmin = true;

    return (
        <div className='flex'>
            {/* side bar */}
            <div className='w-64 min-h-screen bg-orange-300'>
                <ul className='menu'>

                    {
                        isAdmin ? <>  <li className='px-4 py-4'>
                            <NavLink to='/dashboard/adminHome' >
                                <FaHouse />Admin Home</NavLink>
                        </li>
                            <li className='px-4 pb-4'>
                                <NavLink to='/addItems' >
                                    <FaUtensils />Add Items</NavLink>
                            </li>
                            <li className='px-4 pb-4'>
                                <NavLink to='/manageItems' >
                                    <FaList />Manage Items</NavLink>
                            </li>
                            <li className='px-4 pb-4'>
                                <NavLink to='/manageItems' >
                                    <FaBook />Manage Bookings</NavLink>
                            </li>
                            <li className='px-4 pb-4'>
                                <NavLink to='/dashboard/allUsers' >
                                    <FaUsers />All Users</NavLink>
                            </li>
                        </> : <>
                            <li className='px-4 py-4'>
                                <NavLink to='/cart' >
                                    <FaHouse />User Home</NavLink>
                            </li>
                            <li className='px-4 pb-4'>
                                <NavLink to='/reservation' >
                                    <FaNoteSticky />Reservation</NavLink>
                            </li>
                            <li className='px-4 pb-4'>
                                <NavLink to='/reservation' >
                                    <FaMoneyBill />Payment History</NavLink>
                            </li>
                            <li className='px-4 pb-4'>
                                <NavLink to='/reservation' >
                                    <FaBasketShopping />My Cart</NavLink>
                            </li>
                            <li className='px-4'>
                                <NavLink to='/reservation' >
                                    <FaStarOfLife />Add review</NavLink>
                            </li>
                        </>
                    }

                    {/* --------------------------------------------------------------------- */}
                    <hr className='my-6' />

                    <li className='px-4 pb-4'>
                        <NavLink to='/' >
                            <FaAlignJustify />Home</NavLink>
                    </li>
                    <li className=' px-4 pb-4'>
                        <NavLink to='/home' >
                            <FaBucket />Shop</NavLink>
                    </li>
                    <li className=' px-4'>
                        <NavLink to='/home' >
                            <FaEnvelope />Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* content   */}
            <div className='flex-1'> <Outlet /></div>

        </div>
    )
}
