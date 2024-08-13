import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/noteslogo3.png';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../hook/useAxios';
import UserContext from '../Context/UserContext';
import { toast } from 'react-toastify';

const CardSlider = () => {
    const navigate = useNavigate();
    const axios = useAxios();
    const [data, setData] = useState([])
    let {setNotes} = useContext(UserContext);
    const isLoggedIn = localStorage.getItem('user-token')

    useEffect(() => {
        async function getNotes() {
            const result = await axios.get('/api/notes?approved=true')
            console.log(result.data)
            setData(result.data.notes)
        }
        getNotes()
    }, [])

    const handleClick = (notes) => {
        if(isLoggedIn){
          setNotes(notes)
          navigate('/checkout');
        }
        else{
          toast.error("Kindly Login first");
          navigate('/login');
        }
      }

    return (
        <section className='w-full p-10 bg-bgColor  dark:bg-bgColor2'>
            <div className="cards flex justify-around">
                {
                    data.map((key) => {
                        return <div className=" cardPdf h-[350px] w-[300px] flex flex-col items-center justify-evenly p-[1%] mb-[2%] bg-secondry rounded-[5%] hover:shadow-none hover:scale-105">
                            <h2 className='text-primary text-2xl font-bold'>{key.title}</h2>
                            <img src={logo} alt="" className='h-[100px] w-[150px]' />
                            <h3 className='text-primary text-xl font-bold'>Rs. {key.price}</h3>
                            <div className="buttons w-full flex justify-evenly transition duration-[0.5] ease">
                                <button
                                    onClick={()=>{handleClick(key)}}
                                    className='h-[40px] w-[50%] text-[1.2rem] rounded bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent'>
                                    View more..
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>

    )
}

export default CardSlider
