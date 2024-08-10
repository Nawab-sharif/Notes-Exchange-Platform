import React, { useContext } from 'react';
import { Accessibility, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import noteslogo from '../assets/notes2.png'
import { toast } from 'react-toastify';
import UserContext from '../Context/UserContext';

const menuItems = [
  { name: 'Home', href: '/', },
  { name: 'About', href: '/about' },
  { name: 'Notes', href: '/notes', },
  // {name: 'Plans',href: '/plans',},
  { name: 'Contact', href: '/contact', },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isLogin = localStorage.getItem('user-token');
  const navigate = useNavigate();
  const {setMode} = useContext(UserContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  function handleLogout() {
    localStorage.removeItem('user-token');
    localStorage.removeItem('role');
    navigate('/login');
  }

  function handleUpload() {
    let token = localStorage.getItem('user-token')
    if (token) {
      let role = localStorage.getItem('role')
      if (role == 'Service Provider') {
        navigate('/uploadnotes');
      } else {
        toast.error("Only service provider can upload!")
      }
    } else {
      toast.error("Kindly login first!")
      navigate('/login');
    }
  }

  function handleMe(value){
    console.log(value)
    setMode(value)
  }

  // Set Active Menu 
  const location = useLocation();
  const getLinkClass = (path) => {
    return location.pathname === path ? 'text-lg font-semibold  text-accent border-b-4 border-accent  rounded' : ' text-lg font-semibold  rounded';
  };

  return (
    <div className="navbar fixed w-full h-[10vh] bg-primary z-[999] text-white">
      <div className="mx-auto h-[100%] flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="inline-flex items-center space-x-2">
          <span >
            <img src={noteslogo} alt="logo" className='logo h-[60px] w-[65px]' />
          </span>
          <Link to='/' className="title font-bold text-2xl hover:text-accent">Notes Exchange  Platform</Link>
        </div>

        {/* For Menu Items */}
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className={getLinkClass(item.href)}>{item.name}</Link>
              </li>
            ))}
            <li className='parent-list mx-2 p-1'><Accessibility size={36} strokeWidth={2.75} absoluteStrokeWidth  className='hover:text-accent hover:border-b-4 border-accent'/>
              <ul className='child-list absolute top-[60px] bg-white text-black p-2 text-[1.3rem] cursor-pointer'>
                <li>A+</li>
                <li>A</li>
                <li>A-</li>
                <li onClick={()=>handleMe(false)} className='bg-black text-white'>A</li>
                <li>A</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Hire Me Button */}
        <div className="hidden lg:block">
          <button type="button" onClick={handleUpload} className="text-white bg-accent rounded-md mr-4 px-2 py-1 text-lg font-semibold shadow-sm hover:text-primary hover:bg-white   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Upload Notes</button>
          {isLogin ?
            <>
              <button type="button" onClick={handleLogout} className="text-primary bg-white rounded-md mr-4 px-2 py-1 text-lg font-semibold shadow-sm hover:bg-accent hover:text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Log Out</button>
            </>
            :
            <>
              <Link to='/login'>
                <button type="button" className="text-primary bg-white rounded-md mr-4 px-2 py-1 text-lg font-semibold shadow-sm hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Log In</button>
              </Link>
              <Link to='/register'>
                <button type="button" className="text-primary bg-white rounded-md ml-4 px-2 py-1 text-lg font-semibold shadow-sm hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Register</button>
              </Link>
            </>
          }
        </div>

        {/* For Responsive */}
        <div className="lg:hidden"><Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" /></div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-bgColor shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img src={noteslogo} alt="logo" className='h-[50px] w-[50px] text-white' />
                    </span>
                    <span className="font-bold text-accent hover:text-primary">Notes Exchnage Platform</span>
                  </div>
                  <div className="-mr-2">
                    <button type="button" onClick={toggleMenu} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                      <span className="sr-only">Close menu</span><X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link key={item.name} to={item.href} className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50 ">
                        <span className="ml-3 text-base font-medium text-textPrimary hover:text-accent">{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <button type="button" onClick={handleUpload} className="mt-4 w-full rounded-md bg-secondry text-primary px-3 py-2 text-sm font-semibold shadow-sm hover:bg-accent hover:text-textPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Uploads Notes</button>
                {isLogin ?
                  <>
                    <button type="button" onClick={handleLogout} className="mt-4 w-full rounded-md bg-accent text-textPrimary px-3 py-2 text-sm font-semibold shadow-sm hover:bg-secondry hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Logout</button>
                  </>
                  :
                  <>
                    <Link to='/login'>
                      <button type="button" className="mt-4 w-full rounded-md bg-secondry text-primary px-3 py-2 text-sm font-semibold shadow-sm hover:bg-accent hover:text-textPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Log In</button>
                    </Link>
                    <Link to='/register'>
                      <button type="button" className="mt-4 w-full rounded-md bg-accent text-textPrimary px-3 py-2 text-sm font-semibold shadow-sm hover:bg-secondry hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Register</button>
                    </Link>
                  </>
                }
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}