import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../assets/noteslogo3.png';

const Notes = () => {
  const cources = ['BCA', 'MCA', 'BBA', 'MBA', 'B.Tech(CS)','B.Tech(CE)','B.Tech(ME)','B.Tech(EE)', 'M.Tech',]
  return (
    <div className='notes relative h-auto w-full py-[8%] px-[2%] bg-bgcolor flex items-center justify-evenly gap-[4%] flex-wrap'>
      {
        cources.map((key) => {
          return <div className='notesCard h-[180px] w-[300px] flex items-center justify-evenly pr-4 mb-[2%] bg-secondry rounded-[5%] hover:shadow-none hover:scale-105'>
            <img src={logo} alt="logo"  className='h-[130px] w-[120px]'/>
            <div>
              <h1 className='text-primary text-2xl font-bold'>{key}</h1>
              <button className='h-[40px] w-[110px] mt-[30%] text-lg font-bold rounded bg-accent text-primary hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent'><Link to='/notes-pdf' >View Notes</Link></button>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Notes
