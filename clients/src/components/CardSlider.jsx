import React, { useRef } from 'react';
import logo from '../assets/noteslogo3.png';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

const CardSlider = () => {
    const cardData = [
        {
            id: 1,
            subject: 'Python',
            price: 99,
        },
        {
            id: 2,
            subject: 'SQL',
            price: 79,
        },
        {
            id: 3,
            subject: 'HTML',
            price: 49,
        },
        {
            id: 4,
            subject: 'PHP',
            price: 79,
        },
    ]
    return (
        <section className='w-full p-10 bg-bgColor '>
            <div className="cards flex justify-around">
                {
                    cardData.map((key) => {
                        return <div className=" cardPdf h-[350px] w-[300px] flex flex-col items-center justify-evenly p-[1%] mb-[2%] bg-secondry rounded-[5%] hover:shadow-none hover:scale-105">
                            <h2 className='text-primary text-2xl font-bold'>{key.subject}</h2>
                            <img src={logo} alt="" className='h-[150px] w-[200px]' />
                            <h3 className='text-primary text-xl font-bold'>Rs. {key.price}</h3>
                            <div className="buttons w-full flex justify-evenly transition duration-[0.5] ease">
                                <button className='h-[40px] w-[60%] text-[1.2rem] rounded bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent'><Link to='/notes-pdf'>View more..</Link></button>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>

    )
}

export default CardSlider
