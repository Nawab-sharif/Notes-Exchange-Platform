import React, { useContext, useEffect, useState } from 'react';
import AdminContext from './AdminContext';
import { useNavigate } from 'react-router-dom';

export default function AdminContextProvider({ children }) {
  const [adminToken, setAdminToken] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('admin-token')
    if (token) {
      setAdminToken(token)
    }
    else{
      navigate('/admin/login')
    }
  }, [])

  return (
    <div>
      <AdminContext.Provider value={{adminToken, setAdminToken}}>
        {children}
      </AdminContext.Provider>
    </div>
  )
}

export const useAdminContext = () => {
  if (!AdminContext) {
    throw new Error('Admin context should be used inside Admin Context Provider!')
  }
  return useContext(AdminContext)
}