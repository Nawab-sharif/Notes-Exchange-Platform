import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddCourse = () => {
    let [course,setCourse] = useState({title:''})
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(course)
        let result = await axios.post('http://127.0.0.1:3002/api/course', course)
        alert(result.data.msg);
        navigate('/admin/courses')
    }


    return (
        <div className='login h-[100vh] max-w-full bg-bgColor flex items-center justify-around'>
            <div className="form relative bg-secondry h-[50%] w-[25%] mt-[5%] ml-[5%] px-[2%] pt-[1%] pb-[5%] text-textPrimary rounded-[5%]">
                <form method='post' onSubmit={handleSubmit} className='h-full w-full flex flex-col justify-evenly pb-4'>
                    <h1 className='text-2xl text-primary text-center font-bold w-[50%] border-b-4 border-accent rounded relative left-[30%]'>Add Course</h1>
                    <input
                        type="text"
                        name="course"
                        id="course"
                        required
                        autoComplete="off"
                        onChange={(e)=>{setCourse({title:e.target.value})}}
                        placeholder='Enter Course Name'
                        className='h-[15%] pl-[3%] text-black rounded' />

                    <button type='submit' className='btn h-[60px] w-[90px] absolute top-[75%] left-[35%]'>Add</button>
                </form>
            </div>

        </div>
    )
}

export default AddCourse;
