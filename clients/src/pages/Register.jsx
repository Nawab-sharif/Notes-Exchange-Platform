import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useAxios } from '../hook/useAxios';
import { toast } from 'react-toastify';

const Register = () => {
    const [user, setUser] = useState({ role:'', name:'', email:'', contact:'', password:'', })
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

    const handleSubmit = async (e)=>{
        e.preventDefault()
        let result = await axios.post('/api/register',user)
        console.log(result.data)
        toast(result.data.msg)
        navigate('/login')
    }


    return (
        <div className='signup h-[100vh] max-w-full bg-bgColor flex items-center justify-around flex-wrap'>
            <div className="form relative bg-secondry h-[70%] w-[30%] mt-[5%] ml-[5%] px-[2%] pt-[1%] pb-[5%] text-textPrimary rounded-[5%] flex flex-wrap">
                <form method='post' onSubmit={handleSubmit}  className='h-full w-full flex flex-col justify-evenly pb-4'>
                    <h2 className='text-2xl text-primary text-center font-bold w-[30%]  border-b-4 border-accent rounded  relative left-[35%]'>Sign Up</h2>
                    <p className="mt-2 text-base text-gray-600 mb-2 text-center"> Already have an account? <Link to='/login' className="font-bold text-black/60 transition-all duration-200 hover:underline">Login</Link></p>
                    <select
                        name="role"
                        value={user.role}
                        onChange={handleInput}
                        className='h-[10%] text-black rounded'>
                        <option value="default" selected>Select login type</option>
                        <option>Service Provider</option>
                        <option>User</option>
                    </select>

                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                        required
                        autoComplete="off"
                        value={user.name}
                        onChange={handleInput}
                        className='h-[8%] pl-[3%] text-black rounded' />

                    <label htmlFor="email">E-mail</label>
                    <input
                        type="eamil"
                        placeholder='E-mail'
                        name='email'
                        id='email'
                        required
                        autoComplete='off'
                        value={user.email}
                        onChange={handleInput}
                        className='h-[8%] pl-[3%] text-black rounded' />

                    <label htmlFor="phone">Contact</label>
                    <input
                        type="telephone"
                        placeholder='Contact'
                        name='contact'
                        id='contact'
                        required
                        autoComplete='off'
                        value={user.contact}
                        onChange={handleInput}
                        className='h-[8%] pl-[3%] text-black rounded' />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        id='password'
                        required
                        autoComplete='off'
                        value={user.password}
                        onChange={handleInput}
                        className='h-[8%] pl-[3%] text-black rounded' />

                    <button type='submit'  className='btn h-[40px] w-[90px] m-[1%] absolute top-[85%] left-[35%]'>Register</button>
                </form>
            </div>
            {/* Image Here */}
            <div className='h-[70%] w-[40%] mt-[5%]' >
                <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" alt="This is register image" className='h-[100%] w-[100%] rounded-[2%]' />
            </div>
        </div>
    )
}

export default Register;
