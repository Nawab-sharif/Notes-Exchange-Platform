import React from 'react';
import htmlaudio from '../assets/Audio_Notes/Html.mp3';
import softaudio from '../assets/Audio_Notes/SoftComputing.mp3'

const data =
  [
    {
      title: 'HTML',
      price: '59',
      audio: htmlaudio,
    },
    {
      title: 'Soft Computing',
      price: '99',
      audio: softaudio,
    },
  ]


export default function NotesAudio() {
  return (
    <div className='notesPdf relative h-auto w-full py-[8%] bg-bgcolor flex items-center justify-evenly gap-[3%] flex-wrap'>
      {
        data.map((key) => (
          <div className=" cardPdf h-[350px] w-[300px] flex flex-col items-center justify-evenly p-[1%] mb-[2%] bg-secondry rounded-[5%] hover:shadow-none hover:scale-105">
            <h2 className='text-primary font-semibold'>Subject : {key.title}</h2>
            <h3 className='text-primary text-xl font-bold'>Price : Rs. {key.price}</h3>
            <audio src={key.audio} controls  ></audio>
            {/* <div className="buttons w-full flex justify-evenly transition duration-[0.5] ease">
              <button className='h-[40px] w-[110px] text-[1.2rem] rounded bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent'>Play Notes</button>
            </div> */}
          </div>
        ))
      }
    </div>
  )
}
