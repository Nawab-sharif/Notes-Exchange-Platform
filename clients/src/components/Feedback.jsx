import React, { useState } from 'react'
import { SendHorizontal } from 'lucide-react'
import { useAxios } from '../hook/useAxios';
import { toast } from 'react-toastify';

export default function Feedback({id}) {
    const axios = useAxios();
    const [feedback, setFeedback] = useState({ notesId: '', feedback: '' })

    // Feedback Send API call
    async function handleSend(id) {
        // console.log(id)
        setFeedback(()=>{ feedback, feedback.notesId = id })
        const result = await axios.post('/api/feedback', feedback)
        // console.log(result)
        toast.success(result.data.msg);
    }
    return (
        <div className="flex w-[250px] gap-2 items-center">
            <input className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                name='feedback'
                required
                onChange={(e) => { setFeedback({ ...feedback, feedback: e.target.value }) }}
                placeholder="Type Feedback"
            ></input>
            <button type="button" onClick={() => { handleSend(id) }}
                className="text-[1rem] p-2 rounded-lg bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-102 hover:bg-transparent hover:border-2 border-accent hover:text-accent">
                <SendHorizontal />
            </button>
        </div>
    )
}
