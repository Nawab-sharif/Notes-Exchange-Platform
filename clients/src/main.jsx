import React from 'react';
import ReactDOM from 'react-dom/client';
import 'remixicon/fonts/remixicon.css';
import './index.css';
import './app.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact.jsx';
import Course from './pages/Course.jsx';
// import Plans from './pages/Plans.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import NotesPdf from './pages/NotesPdf.jsx';
import NotesText from './pages/NotesText.jsx';
import NotesAudio from './pages/NotesAudio.jsx';
import UploadNotes from './pages/UploadNotes.jsx';
import Error from './pages/Error.jsx';

import AdminLayout from './AdminLayout.jsx';
import AdminLogin from './adminPanel/AdminLogin.jsx';
import AdminDashboard from './adminPanel/AdminDashboard.jsx';
import AdminUsers from './adminPanel/Users.jsx';
import AdminContact from './adminPanel/Contact.jsx';
import AdminNotes from './adminPanel/Notes.jsx';
import AdminRequests from './adminPanel/Request.jsx';
import AdminContextProvider from './Context/AdminContextProvider.jsx';
import AddCourse from './adminPanel/AddCourse.jsx';
import AdminCourses from './adminPanel/Courses.jsx';
import FeedbacksTable from './adminPanel/FeedbackTable.jsx';
import CheckoutNotes from './pages/CheckoutNotes.jsx';



let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/admin' element={<AdminContextProvider><AdminLayout /></AdminContextProvider>} >
        <Route path='' element={<AdminDashboard />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/user' element={<AdminUsers />} />
        <Route path='/admin/contact' element={<AdminContact />} />
        <Route path='/admin/notes' element={<AdminNotes />} />
        <Route path='/admin/requests' element={<AdminRequests />} />
        <Route path='/admin/addcourse' element={<AddCourse />} />
        <Route path='/admin/courses' element={<AdminCourses />} />
        <Route path='/admin/feedback' element={<FeedbacksTable />} />
      </Route>

      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />} />
        <Route path='/notespdf' element={<NotesPdf />} />
        <Route path='/notestext' element={<NotesText />} />
        <Route path='/notesaudio' element={<NotesAudio />} />
        {/* <Route path='/plans' element={<Plans />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/uploadnotes' element={<UploadNotes />} />
        <Route path='/checkout' element={<CheckoutNotes />} />
        <Route path='*' element={<Error />} />
      </Route>
    </>
  ));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition:Bounce
      bodyClassName="toastBody"
    />
  </React.StrictMode>,
)
