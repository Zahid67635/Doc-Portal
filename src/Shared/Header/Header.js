import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaDochub } from "react-icons/fa";

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100 bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-neutral text-neutral-content">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0} className=''>
                            <Link to='/services'>
                                Services
                            </Link>
                            <ul className="p-2 bg-neutral text-neutral-content">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/login' className='btn btn-outline btn-sm btn-info mr-2'>Sign In</Link>
                        </li>
                        <li><Link to='/register' className='btn btn-outline btn-sm btn-info'>Sign Up</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><p className='text-3xl'><FaDochub></FaDochub></p><b>OC-PORT</b></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 bg-neutral text-neutral-content">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link to='/services'>
                            Services
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-neutral text-neutral-content z-10">
                            <li><Link to=''>Submenu 1</Link></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><Link to='/blog'>Blog</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <><ul className="menu menu-horizontal p-0 bg-neutral text-neutral-content">

                            <li tabIndex={0}>
                                <Link to='/services'>
                                    My profile
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-neutral text-neutral-content z-10">
                                    <li><Link to='/myreviews'>My Reviews</Link></li>
                                    <li><Link to=''>Add Services</Link></li>
                                </ul>
                            </li>


                        </ul>
                            <Link to='/' className='btn btn-outline btn-sm btn-info mr-2'><button onClick={logOut}>Logout</button></Link></>
                        :
                        <><Link to='/login' className='btn btn-outline btn-sm btn-info mr-2'>Sign In</Link>
                            <Link to='/register' className='btn btn-outline btn-sm btn-info'>Sign Up</Link><Link to='/services' className="btn">Get started</Link></>
                }


            </div>

        </div >
    );
};

export default Header;