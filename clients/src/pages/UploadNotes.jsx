import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAxios } from '../hook/useAxios';
import { toast } from 'react-toastify';


const UploadNotes = () => {
  const [data, setData] = useState({ courseId: '', title: '', price: '' , preview:'' , view:''})
  const navigate = useNavigate();
  const axios = useAxios()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    async function getData() {
      let result = await axios.get('/api/course')
      setCourses(result.data.courses)
    }
    getData()
  }, [])
  console.log(data);

  const handleInput = (e) => {
    let name = e.target.name;
    if (e.target.files) {
      let value = e.target.files[0]
      setData({ ...data, [name]: value, });
    } else {
      let value = e.target.value;
      setData({ ...data, [name]: value, });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
    let result = await axios.post('/api/notes', data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    toast(result.data.msg);
    // console.log(result.data)
    navigate('/')
  }

  return (
    <div className='login h-[100vh] max-w-full bg-bgColor dark:bg-bgColor2 flex items-center justify-around'>
      <div className="form relative bg-secondry h-[70%] w-[30%] mt-[5%] ml-[5%] px-[2%] pt-[1%] pb-[5%] text-textPrimary rounded-[5%]">
        <form method='post' onSubmit={handleSubmit} className='h-full w-full flex flex-col justify-evenly pb-4'>
          <h1 className='text-2xl m-2 text-primary text-center font-bold w-[35%] border-b-4 border-accent rounded relative left-[30%]'>Add Notes</h1>
          <select
            name="courseId"
            id="course"
            value={data.courseId}
            onChange={handleInput}
            className='h-[10%] text-black rounded'>
            <option value="default" selected>Select Course</option>
            {
              courses.map((course) => (<option value={course._id}>{course.title}</option>))
            }
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
            onChange={handleInput}
            className='h-[8%] text-black rounded' />

          <label htmlFor="view">Select Notes:</label>
          <input
            type="file"
            name="view"
            id="view"
            required
            autoComplete="off"
            onChange={handleInput}
            className='h-[8%] text-black rounded' />

          <button type='submit' className='btn h-[50px] w-[60px] absolute top-[85%] left-[35%]'>Add</button>
        </form>
      </div>

    </div>
  )
}

export default UploadNotes;
