import React from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
    {
        name: 'User',
        to: '/admin/user',
    },
    {
        name: 'Requests',
        to: '/admin/requests',
    },
    {
        name: 'Notes',
        to: '/admin/notes',
    },
    {
        name: 'Courses',
        to: '/admin/courses',
    },
    {
        name: 'Contact',
        to: '/admin/contact',
    },

]

export function AdminSidebar() {
    return (
        <aside className="absolute left-0 top-[7%] h-screen  flex w-60  flex-col overflow-y-auto bg-bgColor px-5 py-8 border-r-4 border-solid border-accent z-10">
            <div className="mt-2 flex flex-1 flex-col justify-between cursor-pointer">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 pt-[20%]">
                        <label className="px-3 text-lg font-bold uppercase text-primary">Admin Dashboard</label>
                        {menuItems.map((item) => (
                            <Link to={item.to}>
                                <li className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-accent"> <span className="mx-2 text-lg font-medium">{item.name}</span></li>
                            </Link>
                        ))}

                    </div>
                </nav>
            </div>
        </aside>
    )
}
