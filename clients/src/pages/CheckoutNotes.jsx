import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/noteslogo3.png';
import UserContext from '../Context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CheckoutNotes() {
    let { notes } = useContext(UserContext);
    let navigate = useNavigate()

    if (!notes) {
        return <Navigate to='/notespdf' />
    }

    function proceedPayment(){
        toast('Payment Succefull')
        navigate('/')
    }
    return (
        <section className="h-screen bg-bgColor dark:bg-bgColor2 flex items-center justify-center">
            <div className="h-[60%] w-[50%] flex flex-col justify-around  overflow-hidden rounded-xl bg-white p-2 shadow-xl">
                <div>
                    <h2 className='text-center text-3xl text-primary font-bold'>Notes Details</h2>
                </div>
                <div className="mb-4 flex items-center rounded-lg py-2  ">
                    <div className="flex flex-col flex-1 text-2xl p-2 font-medium">
                        <p className="p-2">Uploader Name : {notes.user.name}</p>
                        <p className="p-2">Title : {notes.title}</p>
                        <p className="p-2">Price : {notes.price}</p>
                        <p className="p-2">Preview : <a href={notes.previewUrl} target='_blank' className='text-sm cursor-pointer'>Click Here</a></p>
                        {/* <p className="p-2">View : <a href={notes.previewUrl} target='_blank' className='text-sm cursor-pointer'>Click Here</a></p> */}
                    </div>
                    <img src={logo} alt="" className='h-[230px] w-[280px]' />
                </div>

                <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
                    <div className="col-span-2 grid">
                        <a
                            onClick={proceedPayment}
                            className="w-full text-center rounded-md bg-primary px-3 py-2 text-xl font-bold text-textPrimary2 shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            href={notes.viewUrl} target='_blank'>
                            Proceed to payment
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
