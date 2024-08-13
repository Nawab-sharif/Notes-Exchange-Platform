import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../hook/useAxios';

export default function FeedbackSlider() {
    const navigate = useNavigate();
    const axios = useAxios();
    const [data, setData] = useState([])
    const isLoggedIn = localStorage.getItem('user-token')

    useEffect(() => {
        async function getFeedback() {
            const result = await axios.get('/api/feedback')
            console.log(result.data)
            setData(result.data.msg)
        }
        getFeedback()
    }, [])

    return (
        <section className='w-full p-10 bg-bgColor  dark:bg-bgColor2 text-textPrimary dark:text-textPrimary2'>
            <div className='flex  flex-col items-center justify-center py-4 my-4'>
                <h2 className='my-[1%] w-[15%]  text-3xl text-center font-bold border-b-4 border-accent rounded text-primary'>Feedbacks..</h2>
                <p className='text-xl '>These are the feedbacks which are given by the users review which is based on our performance.</p>
            </div>
            <div className="cards flex justify-around">
                {
                    data.map((key) => {
                        return <div className=" cardPdf h-[250px] w-[380px] flex flex-col items-center justify-evenly p-[1%] mb-[2%] bg-secondry rounded-[5%] hover:shadow-none hover:scale-105">
                            <p className='text-lg font-bold'>{key.feedback}</p>
                            <div>
                                <h2 className='text-primary text-2xl font-bold'>By : {key.user.name}</h2>
                                <h3 className='text-primary text-xl font-bold'>Title : {key.notes.title}</h3>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>

    )
}
