import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='  '>
      <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/myMenu'>Menu</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/shop'>Shop</NavLink></li>
        <li><NavLink to='/cart'><FaShoppingCart /></NavLink></li>
        
      </ul>
    </div>
    <img className=' w-[50px]' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/myMenu'>Menu</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/shop'>Shop</NavLink></li>
        <li><NavLink to='/cart'><FaShoppingCart /></NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-secondary z-20">Login</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;