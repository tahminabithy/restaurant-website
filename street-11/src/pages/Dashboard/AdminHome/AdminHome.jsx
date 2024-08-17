import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

export default function AdminHome() {
    const axiosSecure = useAxiosSecure();
    const { data: stats = {} } = useQuery({
        queryKey: ['adminStats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            console.log(res.data);
            return res.data
        }
    })
    return (
        <div className='p-16'>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value text-primary">{stats?.allUsers}</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Total menu</div>
                    <div className="stat-value text-secondary">{stats.allMenu}</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-title">All Orders</div>
                    <div className="stat-value">{stats.allOrders}</div>

                    <div className="stat-desc text-secondary">all the orders done by users</div>
                </div>
            </div>
        </div>
    )
}
