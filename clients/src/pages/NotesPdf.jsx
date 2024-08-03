import React  from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from "flowbite-react";
import logo from '../assets/noteslogo3.png';
import pythonShort from '../Pdf Notes/pythonShort.pdf';
import jsShort from '../Pdf Notes/jsShort.pdf';
import htmlShort from '../Pdf Notes/htmlShort.pdf';
import cssShort from '../Pdf Notes/cssShort.pdf';
import sqlShort from '../Pdf Notes/sqlShort.pdf';
import phpShort from '../Pdf Notes/phpShort.pdf';
import djangoShort from '../Pdf Notes/djangoShort.pdf';

const NotesPdf = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      id: 1,
      name: 'Mohd Sharif',
      subject: 'Python',
      price: 99,
      shortNotes: pythonShort
    },
    {
      id: 2,
      name: 'Faiz Quraishi',
      subject: 'SQL',
      price: 79,
      shortNotes: sqlShort
    },
    {
      id: 3,
      name: 'Shudhanshu',
      subject: 'HTML',
      price: 49,
      shortNotes: htmlShort
    },
    {
      id: 4,
      name: 'Ali Ahmad',
      subject: 'PHP',
      price: 79,
      shortNotes: phpShort
    },
    {
      id: 5,
      name: 'Siddharth',
      subject: 'CSS',
      price: 49,
      shortNotes: cssShort
    },
    {
      id: 6,
      name: 'Mohd Adnan',
      subject: 'JavaScript',
      price: 99,
      shortNotes: jsShort
    },
    {
      id: 7,
      name: 'Danish',
      subject: 'Django',
      price: 89,
      shortNotes: djangoShort
    },
  ]

  const handleClick = () => {
    alert("Kindly Login first");
    navigate('/login')
  }
  return (
    <div className='notesPdf relative h-auto w-full py-[8%] bg-bgcolor flex items-center justify-evenly gap-[3%] flex-wrap'>
      {
        cardData.map((key) => {
          return <div className=" cardPdf h-[400px] w-[350px] flex flex-col items-center justify-evenly p-[1%] mb-[2%] bg-secondry rounded-[5%] hover:shadow-none hover:scale-105">
            <h2 className='text-primary'>Uploaded By : {key.name}</h2>
            <h2 className='text-primary'>Subject : {key.subject}</h2>
            <img src={logo} alt="" className='h-[150px] w-[200px]' />
            <h3 className='text-primary text-xl font-bold'>Price : Rs. {key.price}</h3>
            <div className="buttons w-full flex justify-evenly transition duration-[0.5] ease">
              <Tooltip content="View short version of notes">
                <button className='h-[40px] w-[90px] text-[1.2rem] rounded bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent'><a href={key.shortNotes}>View</a></button>
              </Tooltip>
              <button className='h-[40px] w-[90px] text-[1.2rem] rounded bg-accent text-primary font-bold hover:cursor-pointer hover:shadow-none hover:scale-105 hover:bg-transparent hover:border-2 border-accent hover:text-accent' onClick={handleClick}><a href="">Buy</a></button>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default NotesPdf
