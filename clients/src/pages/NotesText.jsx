import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/notesText/Sidebar';
import { Navbar } from '../components/notesText/Navbar';
import UserContext from '../Context/UserContext';
import { HTML, CSS } from '../components/notesText/data';
import { CheckCircle } from 'lucide-react'

const NotesText = () => {
  const navigate = useNavigate();
  let { content } = useContext(UserContext);
  let { index } = useContext(UserContext);

  return (
    <div className='notesText relative h-[100vh] w-full pt-[6%] bg-bgColor'>

      {/* Navbar Here--- */}
      <Navbar />

      {/* Side Bar Here---- */}
      <Sidebar />

      {/* Content Here----- */}
      <section className="w-[80%] h-[80%] absolute top-[20%] left-[18%] flex items-center  overflow-hidden bg-bgColor pb-14 ml-[10%] ">
        <div className=" md:max-w-4xl">
          <div className="-m-5 flex flex-wrap">
            <div className="rounded-lg bg-white bg-opacity-90">
              <div className="px-9 pb-9 pt-8">
                <p className="mb-6 text-xl  font-medium leading-relaxed text-gray-600">{content}</p>
                <ul className="mb-11">
                  {
                    HTML[content].map((key) => {
                      return <>
                        <li className="mb-4 flex items-center">
                          <CheckCircle className="mr-2" size={16} />
                          <p className="font-semibold leading-normal">{key}</p>
                        </li>
                      </>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default NotesText
