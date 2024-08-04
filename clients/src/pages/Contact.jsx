import React, { useState } from 'react';
import contact from '../assets/contact.jpg';
import { useAxios } from '../hook/useAxios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [user, setUser] = useState({ name: '', contact: '', email: '', message: '' });
  const axios = useAxios();

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    let result = await axios.post('/api/contact', user)
    toast(result.data.msg)
    setUser({ name: '', contact: '', email: '', message: '' })
  }

  return (
    <div className="contact relative bg-bgColor h-[100vh] max-w-[100%] flex flex-wrap pt-[10%] px-[5%]">
      <div className="left h-[90%] w-[45%]">
        <h3 className='w-[20%] px-4 text-lg font-bold border-b-4 border-accent rounded text-primary'>CONTACT</h3>
        <h1 className='my-[3%] p-2 w-[35%] text-center text-textPrimary text-[1.3rem]  bg-accent rounded-full'>Send your query</h1>

        <form method='post' onSubmit={handleSubmit} className='h-[70%] bg-secondry my-4 px-4 rounded-[3%]'>
          <p className='py-[3%]'>You can send any query which is related to the our notes. If you want a notes on any different topic so you can also send the description about that topic.</p>

          <input
            type="text"
            placeholder='Enter Name'
            name='name'
            required
            autoComplete="off"
            value={user.name}
            onChange={handleInput}
            className='h-[15%] w-[48%] pl-[3%] my-[1%] mr-[4%] rounded ' />

          <input
            type="tel"
            placeholder='Enter Contact Number'
            name='contact'
            required
            autoComplete="off"
            value={user.contact}
            onChange={handleInput}
            className='h-[15%] w-[48%] pl-[3%] my-[1%] rounded' /><br />

          <input
            type="email"
            placeholder='Enter Email'
            name='email'
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
            className='h-[15%] w-[100%] pl-[3%] my-[1%] rounded' /><br />

          <textarea
            placeholder='Message'
            name='message'
            required
            autoComplete="off"
            value={user.message}
            onChange={handleInput}
            className='h-[15%] w-[100%] pt-[2%] pl-[3%] my-[1%] rounded'></textarea>

          <button type='submit' className='btn mt-2'>Submit</button>
        </form>
      </div>
      <div className="right h-[90%] w-[55%]  flex items-center justify-center">
        <img src={contact} alt="contact" className='rounded-[5%] h-[100%] w-[90%] ml-10' />
      </div>
    </div>
  )
}

export default Contact
