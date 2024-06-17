import axios from "axios";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";


const UpdateBidPost = () => {
    const bidPost = useLoaderData()
    const { image, title, product_name, category, location, condition, purchase_date, reason, description, seller, price } = bidPost
    console.log(bidPost)
    const { user } = UseAuth()
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
   

    const handleUpdateSubmit = async (e) => {
        const token = localStorage.getItem('token')
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const title = form.title.value
        const product_name = form.product_name.value
        const location = form.location.value
        const price = parseFloat(form.price.value)
        const category = form.category.value
        const condition = form.condition.value
        const reason = form.reason.value
        const purchase_date = startDate
        const description = form.description.value
        

        const postData = {
            image,
            title,
            product_name,
            location,
            price,
            category,
            condition,
            reason,
            purchase_date,
            description,

            seller: {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL,
            },
        }
        await fetch(
            `${import.meta.env.VITE_API_URL}/bidPost/${bidPost._id}`,
            {
              method: "PUT",
              headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(postData),
            }
          )
            .then((res) => res.json())
            .then(() => toast.success("Product updated "));
            navigate('/dashboard/manage-bidPost')
    }


    // update or edit a post
    // const handleUpdateSubmit = async e => {
    //     const token = localStorage.getItem('token')
    //     e.preventDefault()
    //     const form = e.target
    //     const image = form.image.value
    //     const title = form.title.value
    //     const product_name = form.product_name.value
    //     const location = form.location.value
    //     const price = parseFloat(form.price.value)
    //     const category = form.category.value
    //     const condition = form.condition.value
    //     const reason = form.reason.value
    //     const purchase_date = startDate
    //     const description = form.description.value
    //     const confirmation = await swal.fire({
    //         title: 'Are you sure to edit?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, update it!'
    //     });

    //     const postData = {
    //         image,
    //         title,
    //         product_name,
    //         location,
    //         price,
    //         category,
    //         condition,
    //         reason,
    //         purchase_date,
    //         description,

    //         seller: {
    //             name: user?.displayName,
    //             email: user?.email,
    //             photo: user?.photoURL,
    //         },
    //     }
    //     if (confirmation.isConfirmed) {
    //         try {
    //             if (!token) {
    //                 throw new Error('Authentication token is missing');
    //             }

    //             const { data } = await axios.put(
    //                 `${import.meta.env.VITE_API_URL}/bidPost/${bidPost._id}`,
    //                 postData,
    //                 {
    //                     headers: {
    //                         "content-type": "application/json",
    //                         authorization: `Bearer ${token}`
    //                     },
    //                 }
    //             );

    //             console.log(data);
    //             toast.success('Update & save the post successfully');
    //             navigate('/dashboard/manage-bidPost');
    //         } catch (err) {
    //             console.error("Error updating bid post:", err.response ? err.response.data : err.message);
    //             toast.error(err.response ? err.response.data.message || err.message : err.message);
    //         }
            // try {
            //     const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/bidPost/${bidPost._id}`, postData,
            //         {
            //             headers: {
            //                 authorization: `Bearer ${token}`
            //             }
            //         }
            //     );
            //     console.log(data)
            //     toast.success('Update & save the post successfully')
            //     navigate('/dashboard/manage-bidPost')
            // } catch (err) {
            //     console.log(err)
            //     toast.error(err.message)
            // }
    //     }

    // }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-slate-200 p-4 rounded-md">
                <div className="bg-purple-300 p-2 flex justify-center items-center rounded-xl">
                    <h2 className="text-3xl font-bold">Update Your Bid Post {bidPost.title}</h2>
                </div>
                <form onSubmit={handleUpdateSubmit}>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your product image</span>
                            </div>
                            <input type="text" name="image" defaultValue={image} className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your recipe title</span>
                            </div>
                            <input type="text" defaultValue={title} name="title" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your product name</span>
                            </div>
                            <input type="text" name="product_name" defaultValue={product_name} className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your location</span>
                            </div>
                            <input type="text" defaultValue={location} name="location" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Minimum selling price</span>
                            </div>
                            <input type="number" defaultValue={price} name="price" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Product category</span>
                            </div>
                            <select
                                defaultValue={category}
                                name='category'
                                id='category'
                                className='border p-3 rounded-md w-full max-w-xs'
                            >
                                <option value='Furniture'>Furniture</option>
                                <option value='Mobile'>Mobile</option>
                                <option value='Fridge'>Fridge</option>
                                <option value='Ac'>Ac</option>
                                <option value='Car'>Car</option>
                                <option value='Motor Bike'>Motor Bike</option>
                                <option value='Bike'>Bike</option>
                                <option value='Television'>Television</option>
                                <option value='Computer'>Computer</option>
                                <option value='Properties'>Properties</option>
                                <option value='Others'>Others</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your product condition</span>
                            </div>
                            <input type="text" name="condition" defaultValue={condition} className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Purchase Date</span>
                            </div>
                            {/* Date Picker Input Field */}
                            <DatePicker className="border p-2 rounded-md w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </label>
                    </div>
                    <div className="flex gap-10">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Selling Reason</span>
                            </div>
                            <textarea name="reason" className="textarea textarea-bordered h-24" defaultValue={reason}></textarea>
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <textarea name="description" className="textarea textarea-bordered h-24" defaultValue={description}></textarea>
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">What is your name?</span>
                            </div>
                            <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">What is your email?</span>
                            </div>
                            <input type="text" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex justify-center items-center">
                        <input className="btn btn-primary p-2 text-3xl rounded-xl text-white w-full mt-3" type="submit" value="Submit Post" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBidPost;