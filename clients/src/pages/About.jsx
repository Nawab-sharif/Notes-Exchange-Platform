import React from 'react';
import about from '../assets/about.jpg';
import { Link } from 'react-router-dom';
import Work from '../components/Work'

const About = () => {
  return (<>
    <div className='about bg-bgColor dark:bg-bgColor2 text-textPrimary dark:text-textPrimary2 h-[100vh] max-w-full flex items-center'>
      <div className="left relative h-[100%] w-[60%]">

        <div className="content absolute top-[20%] left-[8%]">
          <h1 className='w-[20%] pl-4 text-2xl font-bold my-[3%] border-b-4 border-accent rounded text-primary'>ABOUT US</h1>
          <h2 className='text-xl'>We provide a  notes sharing facility.</h2>
          <p className='my-[3%] text-xl'>We provide a notes for anyone who intrested in this. our material which is absolutly correct and efficient for everyone. We provide the best content of the topic which is easy to understand for everyone.</p>
          <p className='my-[3%] text-xl'>There are two category of the notes in our site which is basically in two types our first type is free and the second type is paid.</p>
          <button className='btn '><Link to='/contact'>Contact us</Link></button>
        </div>
      </div>
      <div className="right h-[100%] w-[40%] flex items-center justify-center">
        <img src={about} alt="" />
      </div>
    </div>
    <hr className=" border-2 border-accent" />
    <Work/>
  </>
  )
}

export default About
