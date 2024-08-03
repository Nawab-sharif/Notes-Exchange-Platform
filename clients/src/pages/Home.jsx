import React, { useRef } from 'react';
import OurNotes from '../components/OurNotes';
import Work from '../components/Work';
import { Link } from 'react-router-dom';
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import CardSlider from '../components/CardSlider';

const Home = () => {
  const gsapRef = useRef();
  useGSAP(()=>{
    gsap.from(gsapRef.current,{
      opacity:0,
      x:-120,
      duration:2,
      // delay:1,
    })
  })
  return (<>
    <div  className='home-page relative top-[3rem] h-screen max-w-screen bg-cover bg-fixed'>
      <div className="absolute h-full w-full bg-black opacity-40"></div>
      <div ref={gsapRef} className="content  absolute top-[15%] left-[8%] text-textPrimary">
        <h1 className='text-[3rem] font-bold text-white'>Welcome to <br /><span className='text-accent'>Notes Exchange </span>Platform</h1>
        <p className='text-[1.3rem] text-primary font-bold my-[1%] bg-secondry w-[55%] p-2 rounded-full'>Share and access notes seamlessly</p>
        <p className='text-[1.3rem] text-white my-[2%]'>We provide a notes for anyone who intrested in this. our material which <br />is absolutly  correct  and efficient for everyone. We provide the best <br /> content of the topic which is easy to understand for everyone.</p>
        <div className='text-[1.3rem] text-white my-1'><span className='text-[2rem] text-accent mr-[0.8rem]'><i class="ri-home-office-line"></i></span>Basic Content</div>
        <div className='text-[1.3rem] text-white mb-4'><span className='text-[2rem] text-accent mr-[0.2rem]'><i class="ri-wifi-line"></i> </span>Premium Content</div>
        <button className='btn '><Link to="/notes">View Notes</Link></button>
      </div>
      <div className='absolute top-[60%] left-[58%] w-[42%] h-[15%] bg-accent rounded px-4 py-4 text-xl font-bold text-textPrimary'>Empowering minds through shared knowledge - <br/> <span className='bg-secondry rounded-full p-2 text-primary mt-2 ml-[50%] block w-[45%]'>Your Notes , Our Platform</span></div>
    </div>
    <hr className=" border-2 border-accent" />
    <OurNotes/>
    <hr className="border-2 border-accent" />
    <CardSlider/>
    <hr className="border-2 border-accent" />
    <Work/>
    <hr className="border-2 border-accent" />
    </>
  )
}

export default Home;
