import React from 'react';
import AdminNavbar from './adminPanel/AdminNavbar';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './adminPanel/AdminSidebar';
import { useAdminContext } from './Context/AdminContextProvider';

const AdminLayout = () => {
  const { adminToken } = useAdminContext()
  return (
    <>
      {
        adminToken && (
          <>
            <AdminNavbar />
            <AdminSidebar />
          </>
        )
      }
      <Outlet />
    </>
  )
}

export default AdminLayout
