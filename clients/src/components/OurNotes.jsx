import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

const Notes = () => {
  const gsapRef = useRef();
  useGSAP(() => {
    gsap.from(gsapRef.current, {
      opacity: 0,
      y: 190,
      duration: 2
    })
  })
  const notesCard = [
    {
      icon: <i class="ri-file-pdf-2-line"></i>,
      head: 'PDF Format',
      para: 'We provide the notes in PDF format',
      href: '/notespdf'
    },
    {
      icon: <i class="ri-file-text-fill"></i>,
      head: 'Text Format',
      para: 'We provide the notes in text format',
      href: '/notestext'
    },
    {
      icon: <i class="ri-mic-line"></i>,
      head: 'Voice Recorded',
      para: 'We also provide the voice recorded notes',
      href: '/notesaudio'
    },
  ]

  return (
    <div className='notes bg-bgColor h-[100vh] max-w-full text-textPrimary flex items-center justify-center'>
      <div className="notes-child h-[60%] w-[80%] flex flex-col items-center">
        <h2 className='my-[1%] w-[15%] pl-4 text-2xl font-bold border-b-4 border-accent rounded text-primary'>OUR NOTES</h2>
        <h1 className='my-[1%] text-2xl'>Explore unlimited possibilities</h1>
        <p className='my-[1%] text-xl'>We provide the notes in some diffrent type which is shown below</p>
        <div ref={gsapRef} className="notes-card h-[50%] w-full mt-[3%] flex items-center justify-between ">
          {
            notesCard.map((key) => {
              return <Link to={key.href} className='h-full w-[30.5%] text-textPrimary bg-secondry hover:scale-105 hover:shadow-lg hover:shadow-accent '>
                <div className="card h-full w-full p-[3%] border-[3px] border-solid border-accent rounded-lg">
                  <div className="icon text-[3rem] text-accent">{key.icon}</div>
                  <h1 className='my-[2%] text-primary font-bold text-xl'>{key.head}</h1>
                  <p className='text-lg'>{key.para}</p>
                  <button className='my-[2%] p-[2%] text-primary font-bold bg-accent rounded'>Click Here <i class="ri-arrow-right-double-line"></i></button>
                </div>
              </Link>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Notes
