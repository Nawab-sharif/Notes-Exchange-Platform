import React from 'react'

export default function AdminDashboard() {
  return (
    <div  className='admin-home relative top-[3rem] h-screen max-w-screen bg-cover bg-fixed flex flex-col items-center justify-center flex-wrap'>
    <div className="absolute h-full w-full bg-black opacity-30"></div>
    <div className='mb-10'>
        {/* <h1 className='text-[3rem] font-bold text-accent'>Admin Dashboard</h1> */}
    </div>
    <div className="ml-[15%]">
      <h1 className='text-[3rem] font-bold text-white'>Welcome <br /><span className='text-accent pl-[70px]'>Mohammad Sharif</span>........  </h1>
      <p className='text-[1.3rem] text-white my-[2%]'>We provide a notes for anyone who intrested in this. our material which <br />is absolutly  correct  and efficient for everyone. We provide the best <br /> content of the topic which is easy to understand for everyone.</p>
    </div>
  </div>
  )
}
