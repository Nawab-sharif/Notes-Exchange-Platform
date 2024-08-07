import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminContext } from '../Context/AdminContextProvider';
import { useAxios } from '../hook/useAxios';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const [user, setUser] = useState({ email: '', password: '', })
  const { setAdminToken } = useAdminContext();
  const axios = useAxios();
  let navigate = useNavigate();

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
    e.preventDefault();
    console.log(user)
    let result = await axios.post('/api/login', user)
    // console.log(result.data)
    if (!result.data.token) {
      toast.error(result.data.msg);
    } else {
      if (result.data.user.isAdmin) {
        localStorage.setItem('admin-token', result.data.token)
        setAdminToken?.(result.data.token)
        toast.success(result.data.msg);
        navigate('/admin')
      }
      else {
        toast.error("Only admins are allowed")
        navigate('/')
      }
    }


  }

  return (
    <div className='login h-[100vh] max-w-full bg-bgColor flex items-center justify-around'>
      <div className="form relative bg-secondry h-[60%] w-[25%] mt-[5%] ml-[5%] px-[2%] pt-[1%] pb-[5%] text-textPrimary rounded-[5%]">
        <form method='post' onSubmit={handleSubmit} className='h-full w-full flex flex-col justify-evenly pb-4'>
          <h1 className='text-2xl text-primary text-center font-bold w-[35%] border-b-4 border-accent rounded relative left-[30%]'>Login</h1>
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

export default AdminLogin;
