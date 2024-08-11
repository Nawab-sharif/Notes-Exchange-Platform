import React, { useRef } from 'react';
import work from '../assets/work.jpg';
import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap';



const Work = () => {
    // const gsapRef = useRef();
    // useGSAP(()=>{
    //     gsap.from(gsapRef.current,{
    //         opacity:0,
    //         x:50,
    //         duration:2,
    //     })
    // })
    return (
        <div className='work h-[100vh] max-w-[100%] bg-bgColor dark:bg-bgColor2 flex items-center'>
            <div className="left h-[100%] w-[50%] flex items-center justify-center">
                <img src={work} alt="work image" className='h-[70%] w-[90%]' />
            </div>
            <div className="right text-textPrimary dark:text-textPrimary2 h-[60%] w-[40%] grid grid-cols-2">
                <div className="content col-span-2">
                    <h1 className='w-[30%] pl-6 text-2xl font-bold border-b-4 border-accent rounded text-primary'>OUR WORK</h1>
                    <p className='py-[5%] text-xl'>This is the data of our working detail of complete notes and achievements and currently active students with us.</p>
                </div>
                <div className="box flex flex-col items-center justify-center">
                    <span className='text-accent text-[4rem] flex'>
                        <i class="ri-calendar-check-fill"></i>
                        <h2 className='value text-[2rem] my-[15%] text-textPrimary dark:text-textPrimary2 font-bold'>1258+</h2>
                    </span>
                    <p className='text-lg'>NOTES COMPLETED</p>
                </div>
                <div className="box flex flex-col items-center justify-center">
                    <span className='text-accent text-[4rem] flex'>
                        <i class="ri-award-fill"></i>
                        <h2 className='text-[2rem] my-[15%] text-textPrimary dark:text-textPrimary2 font-bold'>150+</h2>
                    </span>
                    <p className='text-lg'>AWARDS</p>
                </div>
                <div className="box flex flex-col items-center justify-center">
                    <span className='text-accent text-[4rem] flex'>
                        <i class="ri-team-fill"></i>
                        <h2 className='text-[2rem] my-[15%] text-textPrimary dark:text-textPrimary2 font-bold'>1255+</h2>
                    </span>
                    <p className='text-lg'>STUDENTS ACTIVE</p>
                </div>
                <div className="box flex flex-col items-center justify-center">
                    <span className='text-accent text-[4rem] flex'>
                        <i class="ri-timer-fill"></i>
                        <h2 className='text-[2rem] my-[15%] text-textPrimary dark:text-textPrimary2 font-bold'>1157+</h2>
                    </span>
                    <p className='text-lg'>GOOD REVIEWS</p>
                </div>
            </div>
        </div>
    )
}

export default Work;
