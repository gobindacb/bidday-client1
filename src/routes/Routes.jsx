import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import AddBidPost from "../pages/Dashboard/AddBidPost";
import Profile from "../pages/Dashboard/Profile";
import ManageBidPost from "../pages/Dashboard/ManageBidPost";
import UpdateBidPost from "../pages/Dashboard/UpdateBidPost";
import BidPostDetails from "../pages/BidPostDetails";
import AllBidPost from "../pages/AllBidPost";
import PrivateRoute from "./PrivateRoute";
import PasswordResetModal from "../components/Modals/PasswordResetModal";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/posts`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/allBidPost',
                element: <AllBidPost/>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><BidPostDetails/></PrivateRoute>,
                loader: ({params}) => fetch (`${import.meta.env.VITE_API_URL}/posts/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
                children: [
                    {
                        index: true,
                        element: <DashboardHome/>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile/>
                    },
                    {
                        path: '/dashboard/passwordReset',
                        element: <PasswordResetModal/>
                    },
                    {
                        path: '/dashboard/add-bidPost',
                        element: <AddBidPost/>
                    },
                    {
                        path: '/dashboard/manage-bidPost',
                        element: <ManageBidPost/>
                    },
                    {
                        path:'/dashboard/update/:id',
                        element: <UpdateBidPost/>,
                        loader: ({params}) => fetch (`${import.meta.env.VITE_API_URL}/posts/${params.id}`)
                    }
                ]
            }
    ]
    }
]);

export default router;