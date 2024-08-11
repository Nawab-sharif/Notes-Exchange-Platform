import React, { useRef } from 'react'

export default function audioPlay({ audio }) {
  const audioRef = useRef()
  function playAudio(){
    if(audioRef.current){
      audioRef.current.play();
    }
  }
  function pauseAudio(){
    if(audioRef.current){
      audioRef.current.pause();
    }
  }
  return (
    <>
      <audio ref={audioRef} src={audio} controls className='hidden' ></audio>
      <div className="buttons w-full flex justify-evenly transition duration-[0.5] ease">
        <button onClick={playAudio} className='h-[40px] w-[110px] text-[1.2rem] rounded bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent'>Play</button>
        <button onClick={pauseAudio} className='h-[40px] w-[110px] text-[1.2rem] rounded bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent'>Stop</button>
      </div>
    </>
  )
}
