import { NavLink, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between text-sm py-4 border-b border-b-gray-400'>
      <img src={assets.logo} alt="Logo" className='w-44 cursor-pointer' />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/">
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to="/doctors">
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>


        <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to="/contact">
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
            <button onClick={()=>navigate('/login')}  className='bg-primary text-white px-8 py-3 rounded-full font-light hidden  md:block'>Create account</button>
        </div>
    </div>
  )
}

export default Navbar
