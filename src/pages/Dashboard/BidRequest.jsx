import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";


const BidRequest = () => {

    const { user } = UseAuth();
    const [myRequest, setMyRequest] = useState([]);
    const [othersRequest, setOthersRequest] = useState([]);
    const [activeButton, setActiveButton] = useState("myRequest");
    console.log('my-request', myRequest)
    useEffect(() => {
        if (activeButton === "myRequest") {
            getData();
        } else if (activeButton === "othersRequest") {
            getOthersRequestData();
        }
    }, [user, activeButton]);

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/my-request/${user?.email}`);
        setMyRequest(data);
    };

    const getOthersRequestData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/others-request/${user?.email}`);
        setOthersRequest(data);
    };

    const handleDelete = async (id) => {
        const confirmation = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        });

        if (confirmation.isConfirmed) {
            try {
                const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/request/${id}`);
                console.log(data);
                Swal.fire(
                    'Cancelled!',
                    'Your request has been cancelled.',
                    'success'
                );
                getData();
            } catch (err) {
                console.log(err);
                Swal.fire(
                    'Error!',
                    'Failed to cancel request. Please try again later.',
                    'error'
                );
            }
        } else {
            Swal.fire(
                'Cancelled!',
                'Your cancellation has been cancelled.',
                'info'
            );
        }
    };

    const handleCancel = async (id) => {
        const confirmation = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        });
    
        if (confirmation.isConfirmed) {
            try {
                const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/request/${id}`);
                console.log(data);
                Swal.fire(
                    'Cancelled!',
                    'Your request has been cancelled.',
                    'success'
                );
                getOthersRequestData();
            } catch (err) {
                console.log(err);
                Swal.fire(
                    'Error!',
                    'Failed to cancel request. Please try again later.',
                    'error'
                );
            }
        } else {
            Swal.fire(
                'Cancelled!',
                'Your cancellation has been cancelled.',
                'info'
            );
        }
    };

    return (
        <div className="container my-4 mx-auto sm:p-2">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 mb-2">
                <button className={`btn ${activeButton === "myRequest" ? "btn-primary" : "btn-secondary"}`} onClick={() => setActiveButton("myRequest")}>
                    My request on others post
                </button>
                <button className={`btn ${activeButton === "othersRequest" ? "btn-primary" : "btn-secondary"}`} onClick={() => setActiveButton("othersRequest")}>
                    Others request on my post
                </button>
            </div>
            {activeButton === "myRequest" && (
                <div className="container my-4 mx-auto sm:p-2">
                    {/* Your code for displaying "My request on others post" */}
                    {myRequest.length > 0 ? (
                        <div className="container my-4 mx-auto sm:p-2">
                            <h2 className="mb-4 text-xl font-semibold leading-tight">My Volunteer requested post <span className="px-3 py-1 font-semibold rounded-md bg-violet-600">
                                <span className="text-white">{myRequest.length} post</span>
                            </span></h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-xs">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col className="w-24" />
                                    </colgroup>
                                    <thead className="dark:bg-gray-300">
                                        <tr className="text-left">
                                            <th className="p-3">Image</th>
                                            <th className="p-3">Title</th>
                                            <th className="p-3">Seller</th>
                                            <th className="p-3">Min Bid</th>
                                            <th className="p-3">Your Bid</th>
                                            <th className="p-3">Status</th>
                                            <th className="p-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            myRequest?.map(req =>
                                                <tr key={req._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                                    <td>
                                                        <img className="h-20 w-20" src={req?.postImage} alt="" />
                                                    </td>
                                                    <td className="p-3">
                                                        <p className="font-bold">{req?.post_title}</p>
                                                        <p>{req?.request_title}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p className="font-bold">{req?.seller_name}</p>
                                                        <p>{req?.seller_email}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p>{req?.bid_start}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p>{req?.bid_price}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <span className="px-3 py-1 font-semibold rounded-md bg-violet-600 dark:text-gray-50">
                                                            <span className="text-white">{req?.status}</span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => handleDelete(req?._id)} className="btn btn-sm">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-primary">No request on others post</h1>
                        </div>
                    )}
                </div>
            )}
            {activeButton === "othersRequest" && (
                <div className="container p-0 mx-auto sm:p-2">
                    {/* Your code for displaying "other request on my post" */}
                    {othersRequest.length > 0 ? (
                        <div className="container my-4 mx-auto sm:p-2">
                            <h2 className="mb-4 text-xl font-semibold leading-tight">My Volunteer requested post <span className="px-3 py-1 font-semibold rounded-md bg-violet-600">
                                <span className="text-white">{othersRequest.length} post</span>
                            </span></h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-xs">
                                    <colgroup>
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col className="w-24" />
                                    </colgroup>
                                    <thead className="dark:bg-gray-300">
                                        <tr className="text-left">
                                            <th className="p-3">Image</th>
                                            <th className="p-3">Title</th>
                                            <th className="p-3">Bidder</th>
                                            <th className="p-3">Min start</th>
                                            <th className="p-3">Bidder Bid</th>
                                            <th className="p-3">Status</th>
                                            <th className="p-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            othersRequest?.map(req =>
                                                <tr key={req._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                                    <td>
                                                        <img className="h-20 w-20" src={req?.postImage} alt="" />
                                                    </td>
                                                    <td className="p-3">
                                                        <p className="font-bold">{req?.post_title}</p>
                                                        <p>{req?.request_title}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p className="font-bold">{req?.bidder_name}</p>
                                                        <p>{req?.bidder_email}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p>{req?.bid_start}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <p>{req?.bid_price}</p>
                                                    </td>
                                                    <td className="p-3">
                                                        <span className="px-3 py-1 font-semibold rounded-md bg-violet-600 dark:text-gray-50">
                                                            <span className="text-white">{req?.status}</span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <button onClick={() => handleCancel(req?._id)} className="btn btn-sm">Cancel</button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-primary">No request on my post</h1>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BidRequest;