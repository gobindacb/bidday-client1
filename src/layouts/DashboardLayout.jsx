import { Link, Outlet } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";



const DashboardLayout = () => {
    const { user, logout } = UseAuth();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Dashboard Options
                </label>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
                    {/* Sidebar content here */}
                    <div>
                        <div className="flex items-center p-2 space-x-4">
                            <img src={user?.photoURL} alt="Photo" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                            <div>
                                <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                                <span className="flex items-center space-x-1">
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">View profile</a>
                                </span>
                            </div>
                        </div>
                        <li className="bg-gray-300 text-gray-900">
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                </svg>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <Link to='/dashboard/profile'>My Profile</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/manage-bidPost'>Manage Bid Post</Link>
                        </li>
                        <li>
                            <Link to='/dashboard/add-bidPost'>Add Bid Post</Link>
                        </li>
                        <li>
                            <Link to='/write-blog'>Write a blog</Link>
                        </li>
                    </div>
                    <div className="flex gap-4">
                        <Link to={"/"} className="btn bg-orange-600 text-purple-700 font-bold text-xl">
                            Home
                        </Link>
                        <button onClick={logout} className="btn bg-purple-600 text-orange-700 font-bold text-xl">
                            Logout
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;