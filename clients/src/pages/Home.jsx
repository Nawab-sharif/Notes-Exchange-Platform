import React, { useRef } from 'react';
import OurNotes from '../components/OurNotes';
import Work from '../components/Work';
import { Link } from 'react-router-dom';
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import CardSlider from '../components/CardSlider';
import FeedbackSlider from '../components/FeedbackSlider';

const Home = () => {
  const gsapRef = useRef();
  const gsapRef2 = useRef();
  useGSAP(()=>{
    gsap.from(gsapRef.current,{
      opacity:0,
      x:-120,
      duration:2,
      // delay:1,
    })
    gsap.from(gsapRef2.current,{
      // opacity:0,
      x:200,
      duration:5,
      repeat:-1,
      yoyo:true
    })
  })


  return (<>
    <div  className='home-page relative top-[3rem] h-screen max-w-screen bg-cover bg-fixed'>
      <div className="absolute h-full w-full bg-black opacity-40"></div>
      <div ref={gsapRef} className="content w-[50%]  absolute top-[15%] left-[8%] flex flex-col justify-center text-textPrimary">
        <h1 className='text-[3rem] font-bold text-white'>Welcome to <br /><span className='text-accent'>Notes Exchange </span>Platform</h1>
        <p className='box text-[1.5rem] text-primary font-bold my-[1%] bg-secondry w-[65%] p-2 pl-8 rounded-full'>Share and access notes seamlessly</p>
        <p className='text-[1.3rem] text-white my-[2%]'>We provide a notes for anyone who intrested in this. our material which is absolutly  correct  and efficient for everyone. We provide the best content of the topic which is easy to understand for everyone.</p>
        <div className='text-[1.3rem] text-white my-1'><span className='text-[2rem] text-accent mr-[0.8rem]'><i class="ri-home-office-line"></i></span><span>Basic Content</span></div>
        <div className='text-[1.3rem] text-white mb-4'><span className='text-[2rem] text-accent mr-[0.2rem]'><i class="ri-wifi-line"></i> </span><span>Premium Content</span></div>
        <Link to="/notespdf"><button className='btn'>View Notes</button></Link>
      </div>
      <p ref={gsapRef2} className='absolute top-[40px] left-[20px] text-[1.3rem]  font-bold my-[1%] bg-bgColor dark:bg-bgColor2 text-textPrimary dark:text-textPrimary2 w-[50%] text-center p-2 pl-8 rounded-full'>This website follow the all rules and instructions for disabilities</p>
      <div className='rightcontent absolute top-[60%] left-[58%] w-[42%] h-[15%] bg-accent rounded px-4 py-4 text-xl font-bold text-textPrimary'>Empowering minds through shared knowledge -- <br/> <span className='bg-secondry rounded-full p-2 text-primary mt-2 ml-[50%] block w-[50%]'>Your Notes , Our Platform</span></div>
    </div>
    <hr className=" border-2 border-accent" />
    <OurNotes/>
    <hr className="border-2 border-accent" />
    <CardSlider/>
    <hr className="border-2 border-accent" />
    <FeedbackSlider/>
    <hr className="border-2 border-accent" />
    <Work/>
    <hr className="border-2 border-accent" />
    </>
  )
}

export default Home;
