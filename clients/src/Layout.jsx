import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import UserContextProvider from './Context/UserContextProvider';

const Layout = () => {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </>
  )
}

export default Layout;
