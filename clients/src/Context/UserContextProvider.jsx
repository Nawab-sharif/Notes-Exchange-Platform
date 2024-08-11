import React, { useState } from 'react';
import UserContext from './UserContext';

export default function UserContextProvider({children}) {
    let [index,setIndex] = useState('HTML')
    let [content,setContent] = useState('Introduction')
  return (
    <div>
      <UserContext.Provider value={{index,content,setIndex,setContent}}>
            {children}
      </UserContext.Provider>
    </div>
  )
}
