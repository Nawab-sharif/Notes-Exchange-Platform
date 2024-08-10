import React, { useState } from 'react';
import UserContext from './UserContext';

export default function UserContextProvider({children}) {
    let [index,setIndex] = useState('HTML')
    let [content,setContent] = useState('Introduction')
    let [mode,setMode] = useState(false)
  return (
    <div>
      <UserContext.Provider value={{index,content,setIndex,setContent,mode,setMode }}>
            {children}
      </UserContext.Provider>
    </div>
  )
}
