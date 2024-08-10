import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/noteslogo3.png';
import { useAxios } from '../hook/useAxios';


const Notes = () => {
  const [data, setData] = useState([]);
  const axios = useAxios();

  async function getData() {
    const result = await axios.get('/api/course');
    setData(result.data.courses);
    console.log(result.data.courses)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='notes relative h-auto w-full py-[8%] px-[2%] bg-bgcolor flex items-center justify-evenly gap-[4%] flex-wrap'>
      {
        data.map((key) => {
          return <div className='notesCard h-[180px] w-[300px] flex items-center justify-evenly pr-4 mb-[2%] bg-secondry rounded-[5%] hover:shadow-none hover:scale-105'>
            <img src={logo} alt="logo" className='h-[130px] w-[120px]' />
            <div>
              <h1 className='text-primary text-2xl font-bold'>{key.title}</h1>
              <Link to='/notespdf' >
                <button className='h-[40px] w-[110px] mt-[30%] text-lg font-bold rounded bg-accent text-primary hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent'>View Notes</button>
              </Link>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Notes
