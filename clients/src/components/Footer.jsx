import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/notes.png';

export default function Footer() {
    return (
        <footer className="footer w-full bg-primary text-white">

            <div className="foot flex items-center justify-evenly flex-wrap">
                <div className="box flex items-center justify-center gap-2">
                    <div className='text-[4rem] text-accent'><i class="ri-home-office-line"></i></div>
                    <div><h2>ADDRESS</h2> <p>Lucknow (UP) India</p></div>
                </div>
                <div className="box flex items-center justify-center gap-2">
                    <div className='text-[4rem] text-accent'><i class="ri-smartphone-line"></i></div>
                    <div><h2>CALL FOR QUERY</h2> <p>(+91) 8577041068</p></div>
                </div>
                <div className="box flex items-center justify-center gap-2">
                    <div className='text-[4rem] text-accent'><i class="ri-mail-line"></i></div>
                    <div><h2>SEND US MESSAGE</h2> <p>sharifquraishihgh@gmail.com</p></div>
                </div>
                <div className="box flex items-center justify-center gap-2">
                    <div className='text-[4rem] text-accent'><i class="ri-timer-2-line"></i></div>
                    <div><h2>OPENING HOURS</h2> <p>24/7 Available</p></div>
                </div>
            </div>

            <div className="mx-auto my-4 max-w-6xl flex items-start justify-between space-x-8 md:flex-row">
                <div className="w-full px-4 md:w-1/2 lg:px-0">
                    <h1 className="max-w-sm text-3xl font-bold">Subscribe to our Newsletter</h1>
                    <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
                        <input className="flex h-10 w-full rounded-md border-2 border-accent bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="email" placeholder="Email"></input>
                        <button type="button" className="bg-accent text-textPrimary ml-4 rounded-full px-3 py-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </form>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/5 lg:grid-cols-3">
                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-semibold text-accent ">Quick Links</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-300">
                            <li className='hover:text-accent'><a href="/"><i class="ri-arrow-right-s-fill"></i>Home</a></li>
                            <li className='hover:text-accent'><a href="/about"><i class="ri-arrow-right-s-fill"></i>About</a></li>
                            <li className='hover:text-accent'><a href="/course"><i class="ri-arrow-right-s-fill"></i>Course</a></li>
                            <li className='hover:text-accent'><a href="/plans"><i class="ri-arrow-right-s-fill"></i>Plans</a></li>
                            <li className='hover:text-accent'><a href="/contact"><i class="ri-arrow-right-s-fill"></i>Contact</a></li>
                        </ul>
                    </div>

                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-semibold text-accent ">Usefull Links</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-300">
                            <li className='hover:text-accent'><a href=""><i class="ri-facebook-circle-fill"></i><span className='ml-2'>Facebook</span></a></li>
                            <li className='hover:text-accent'><a href=""><i class="ri-twitter-x-fill"></i><span className='ml-2'>Twitter</span></a></li>
                            <li className='hover:text-accent'><a href=""><i class="ri-whatsapp-line"></i><span className='ml-2'>Whatsapp</span></a></li>
                            <li className='hover:text-accent'><a href=""><i class="ri-instagram-line"></i><span className='ml-2'>Instagram</span></a></li>
                            <li className='hover:text-accent'><a href=""><i class="ri-linkedin-fill"></i><span className='ml-2'>LinkedIn</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="my-4 border-2 border-accent" />

            <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0 pb-6">
                <div className="inline-flex items-center">
                    {/* <span><img src={logo} alt="" className='h-[60px] w-[65px]' /></span> */}
                    <span className="ml-4 text-xl font-bold hover:text-accent">Notes Exchange Platform</span>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="text-lg font-medium text-white">© 2024 NotesExchangePlatform. All rights reserved.</p>
                </div>
            </div>

        </footer>
    )
}
