import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useAxios } from '../hook/useAxios';
import { toast } from 'react-toastify';

const Login = () => {
  const [user, setUser] = useState({  email: '', password: '', })
  const navigate = useNavigate();
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


  const handleSubmit = async(e) => {
    e.preventDefault()
    let result = await axios.post('/api/login',user)
    console.log(result.data)
    if(result.data.token){
      toast.success(result.data.msg);
      localStorage.setItem('user-token',result.data.token);
      localStorage.setItem('role',result.data.user.role);
      navigate('/')
    }else{
      toast.error(result.data.msg);
    }
  }

  return (
    <div className='login h-[100vh] max-w-full bg-bgColor flex items-center justify-around flex-wrap md:flex-col'>
      {/* Image Here */}
      <div className='h-[70%] w-[40%] mt-[5%]' >
        <img src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="This is register image" className='h-[100%] w-[100%] rounded-[2%]' />
      </div>
      <div className="form relative bg-secondry h-[70%] w-[30%] mt-[5%] ml-[5%] px-[2%] pt-[1%] pb-[5%] text-textPrimary rounded-[5%]">
        <form method='post' onSubmit={handleSubmit} className='h-full w-full flex flex-col justify-evenly pb-4'>
          <h1 className='text-2xl text-primary text-center font-bold w-[35%] border-b-4 border-accent rounded relative left-[30%]'>Login</h1>
          <p className="mt-2 text-base text-gray-600 text-center"> Don't have an account? <Link  to='/register' className="font-bold text-black/60 transition-all duration-200 hover:underline">Create an account</Link></p>
          <label htmlFor="uName">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
            placeholder='E-mail'
            className='h-[10%] pl-[3%] text-black rounded' />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInput}
            placeholder='Password'
            className='h-[10%] pl-[3%] text-black rounded' />

          <button type='submit' className='btn h-[60px] w-[90px] absolute top-[83%] left-[35%]'>Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login;
