import React, { useRef } from 'react';
import htmlaudio from '../assets/Audio_Notes/Html.mp3';
import softaudio from '../assets/Audio_Notes/SoftComputing.mp3'
import AudioPlay from '../components/AudioPlay';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { SendHorizontal } from 'lucide-react';

export default function NotesAudio() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('user-token');
  const data =
    [
      {
        id: 1,
        title: 'HTML',
        price: '59',
        audio: htmlaudio,
      },
      {
        id: 2,
        title: 'Soft Computing',
        price: '99',
        audio: softaudio,
      },
    ]

  

  return (
    <div className='notesPdf relative h-auto w-full py-[8%] bg-bgcolor dark:bg-bgColor2 flex items-center justify-evenly gap-[3%] flex-wrap'>
      {
        data.map((key) => (
          <div className=" cardPdf h-[350px] w-[300px] flex flex-col items-center justify-evenly p-[1%] mb-[2%] bg-secondry rounded-[5%] hover:shadow-none hover:scale-105">
            <h2 className='text-primary text-xl font-semibold'>Title : {key.title}</h2>
            {isLoggedIn ?
              <AudioPlay audio={key.audio} />
              :
              <>
                <h3 className='text-primary text-xl font-bold'>Price : Rs. {key.price}</h3>
                <div className="buttons w-full flex justify-evenly transition duration-[0.5] ease">
                  <button onClick={() => { toast('Kindly login first'); navigate('/login') }} className='h-[40px] w-[110px] text-[1.2rem] rounded bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent'>Buy</button>
                </div>
              </>
            }
            <div className="flex w-[250px] gap-2 mb-2 items-center">
              <input className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Type Feedback"
              ></input>
              <button type="button" onClick={handleSend}
                className="text-[1rem] p-2 rounded-lg bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-102 hover:bg-transparent hover:border-2 border-accent hover:text-accent">
                <SendHorizontal />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
