import React, { useContext, useEffect } from 'react'
import {data} from './data';
import UserContext from '../../Context/UserContext';
import { toast } from 'react-toastify';

export function Sidebar() {
  let {index} = useContext(UserContext);
  let {setContent} = useContext(UserContext);
  console.log(index)
  // console.log(data[index])

  const handleClick = (value) =>{
    if(index == 'HTML') setContent(value);
    else toast('Data not available Now')
    
  }
  return (
    <aside className="flex w-60  flex-col overflow-y-auto bg-bgColor px-5 py-8 border-r-4 border-solid border-accent">
      <div className="mt-2 flex flex-1 flex-col justify-between cursor-pointer">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
          <label className="px-3 text-sm font-bold uppercase text-primary">{index} Tutorial</label>
          {
            data[index].map((key)=>{
                return <li className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-primary" onClick={()=>{handleClick(key)}}> <span className="mx-2 text-sm font-medium">{key}</span></li>
            })
          }
            
          </div>
        </nav>
      </div>
    </aside>
  )
}
