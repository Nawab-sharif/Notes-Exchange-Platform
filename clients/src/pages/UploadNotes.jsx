import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UploadNotes = () => {
  const [data, setdata] = useState({ course: '', title: '', price: '' })
  const navigate = useNavigate();

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value, });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    let result = await axios.post('http://127.0.0.1:3002/api/login', user)
    alert(result.data.msg);
    console.log(result.data)
    navigate('/')
  }

  return (
    <div className='login h-[100vh] max-w-full bg-bgColor flex items-center justify-around'>
      <div className="form relative bg-secondry h-[70%] w-[30%] mt-[5%] ml-[5%] px-[2%] pt-[1%] pb-[5%] text-textPrimary rounded-[5%]">
        <form method='post' onSubmit={handleSubmit} className='h-full w-full flex flex-col justify-evenly pb-4'>
          <h1 className='text-2xl m-2 text-primary text-center font-bold w-[35%] border-b-4 border-accent rounded relative left-[30%]'>Add Notes</h1>
          <select
            name="course"
            id="course"
            value={data.course}
            onChange={handleInput}
            className='h-[10%] text-black rounded'>
            <option value="default" selected>Select Course</option>
            <option>BCA</option>
            <option>MCA</option>
          </select>

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            autoComplete="off"
            value={data.title}
            onChange={handleInput}
            placeholder='Title'
            className='h-[10%] pl-[3%] text-black rounded' />

          <label htmlFor="price">Price(in INR):</label>
          <input
            type="text"
            name="price"
            id="price"
            required
            autoComplete="off"
            value={data.price}
            onChange={handleInput}
            placeholder='Price'
            className='h-[10%] pl-[3%] text-black rounded' />

          <label htmlFor="preview">Select Preview File:</label>
          <input
            type="file"
            name="preview"
            id="preview"
            required
            autoComplete="off"
            // value={}
            // onChange={handleInput}
            className='h-[8%] text-black rounded' />

          <label htmlFor="preview">Select File:</label>
          <input
            type="file"
            name="preview"
            id="preview"
            required
            autoComplete="off"
            // value={}
            // onChange={handleInput}
            className='h-[8%] text-black rounded' />

          <button type='submit' className='btn h-[50px] w-[60px] absolute top-[85%] left-[35%]'>Add</button>
        </form>
      </div>

    </div>
  )
}

export default UploadNotes;
