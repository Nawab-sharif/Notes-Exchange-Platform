import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import noteslogo from '../assets/notes2.png'

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
  const navigate = useNavigate()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  function handleLogout() {
    localStorage.removeItem('user-token');
    navigate('/login');
  }

  return (
    <div className="fixed w-full h-[10vh] bg-primary z-[999] text-white">
      <div className="mx-auto h-[100%] flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="inline-flex items-center space-x-2">
          <span >
            <img src={noteslogo} alt="logo" className='h-[60px] w-[65px]' />
          </span>
          <Link to='/' className="font-bold text-2xl hover:text-accent">Notes Exchange  Platform</Link>
        </div>

        {/* For Menu Items */}
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}><Link to={item.href} className="text-lg font-semibold hover:text-accent hover:border-b-4 border-accent rounded">{item.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Hire Me Button */}
        <div className="hidden lg:block">
          {isLogin ?
            <>
              <Link to='/uploadnotes'>
                <button type="button" className="text-primary bg-bgColor rounded-md mr-4 px-2 py-1 text-lg font-semibold shadow-sm hover:bg-[] hover:text-textPrimary hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Upload Notes</button>
              </Link>
              <button type="button" onClick={handleLogout} className="text-primary bg-bgColor rounded-md mr-4 px-2 py-1 text-lg font-semibold shadow-sm hover:bg-[] hover:text-textPrimary hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Log Out</button>
            </>
            :
            <>
              <Link to='/login'>
                <button type="button" className="text-primary bg-bgColor rounded-md mr-4 px-2 py-1 text-lg font-semibold shadow-sm hover:bg-[] hover:text-textPrimary hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Log In</button>
              </Link>
              <Link to='/register'>
                <button type="button" className="text-textPrimary bg-accent rounded-md ml-4 px-2 py-1 text-lg font-semibold shadow-sm hover:bg-white/100 hover:text-primary hover:bg-bgColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Register</button>
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
                {isLogin ?
                  <>
                    <Link to='/uploadnotes'>
                      <button type="button" className="mt-4 w-full rounded-md bg-secondry text-primary px-3 py-2 text-sm font-semibold shadow-sm hover:bg-accent hover:text-textPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Uploads Notes</button>
                    </Link>
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