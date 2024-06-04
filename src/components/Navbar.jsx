import { Link } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import {home} from 'react-icons-kit/icomoon/home'
import Icon from "react-icons-kit";


const Navbar = () => {
    const { user, logout } = UseAuth();

    const navItems = <>
        <li><Link to='/' ><Icon icon={home} size={21}/></Link></li>
        <li><Link to='/allBidPost' >All Offer</Link></li>
        <li><Link to='/' >Blogs</Link></li>
        <li>
            <details className="z-50">
                <summary>About</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><a>Contact</a></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-50">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost"><h1 className="text-xl md:text-5xl text-white font-bold"><span className="text-orange-600">Bid</span><span className="text-purple-600">Day</span></h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><button onClick={logout} className="btn">Logout</button></li>
                            </ul>
                        </div>
                    </> : <>
                        <Link to='/login' className="btn">Login</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;