import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from "flowbite-react";
import logo from '../assets/noteslogo3.png';
import { useAxios } from '../hook/useAxios';
import { toast } from 'react-toastify';
import Feedback from '../components/Feedback';
import UserContext from '../Context/UserContext';

const NotesPdf = () => {
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
    <div className='notesPdf relative h-auto w-full py-[8%] bg-bgcolor dark:bg-bgColor2 flex items-center justify-evenly gap-[3%] flex-wrap'>
      {
        data.map((key) => {
          return <div className=" cardPdf h-[400px] w-[300px] flex flex-col items-center justify-evenly p-[1%] mb-[2%] bg-secondry rounded-[5%] hover:shadow-none hover:scale-105">
            <h2 className='text-primary font-semibold'>Uploaded By : {key.user.name}</h2>
            <h2 className='text-primary font-semibold'>Subject : {key.title}</h2>
            <img src={logo} alt="" className='h-[100px] w-[180px]' />
            <h3 className='text-primary text-xl font-bold'>Price : Rs. {key.price}</h3>
            <div className="buttons w-full flex justify-evenly transition duration-[0.5] ease">
              <Tooltip content="View short version of notes">
                <button className='h-[40px] w-[90px] text-[1.2rem] rounded bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent'><a href={key.previewUrl} target='_blank'>Preview</a></button>
              </Tooltip>
              <button 
              type='button'
              onClick={()=>{handleClick(key)}}
              className='h-[40px] w-[90px] text-[1.2rem] rounded bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent' >
                {/* {isLoggedIn ? (<a href={key.viewUrl} target='_blank'>Buy</a>) : (<button onClick={handleClick}>Buy</button>)} */}
                Buy
              </button>
            </div>
            {isLoggedIn && <Feedback id = {key._id}/>}
          </div>
        })
      }
    </div>
  )
}

export default NotesPdf
