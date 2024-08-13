import React, { useState } from 'react';
import UserContext from './UserContext';

export default function UserContextProvider({children}) {
    let [index,setIndex] = useState('HTML')
    let [content,setContent] = useState('Introduction')
    let [notes,setNotes] = useState()
  return (
    <div>
      <UserContext.Provider value={{index,content,setIndex,setContent , notes,setNotes}}>
            {children}
      </UserContext.Provider>
    </div>
  )
}
