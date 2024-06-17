import axios from "axios";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";


const AddBidPost = () => {
    const { user } = UseAuth();
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const handleBidPostSubmit = async (e) => {
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
        await fetch(`${import.meta.env.VITE_API_URL}/post`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(postData),
          })
            .then((res) => res.json())
            .then(() => {
              toast.success("Product added successful");
              form.reset();
              navigate('/dashboard/manage-bidPost')
            });
    }


    // const handleBidPostSubmit = async e => {
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
    //     try {
    //         const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/post`, postData,
    //             {
    //                 headers: {
    //                     "content-type": "application/json",
    //                     authorization: `Bearer ${token}`
    //                 },
    //                 body: JSON.stringify(data),
    //             }
    //         )
    //         console.log(data)
    //         toast.success('Congrats! Your recipe post successfully.')
    //         navigate('/dashboard/manage-bidPost')
    //     } catch (err) {
    //         toast.error(err)
    //         console.log(err)
    //     }
    // }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-slate-200 p-4 rounded-md">
                <div className="bg-purple-300 p-2 flex justify-center items-center rounded-xl">
                    <h2 className="text-3xl font-bold">Add Your Bid Post</h2>
                </div>
                <form onSubmit={handleBidPostSubmit}>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your product image</span>
                            </div>
                            <input type="text" name="image" placeholder="image url" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your recipe title</span>
                            </div>
                            <input type="text" placeholder="title" name="title" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your product name</span>
                            </div>
                            <input type="text" name="product_name" placeholder="product name" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your location</span>
                            </div>
                            <input type="text" placeholder="location" name="location" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Minimum selling price</span>
                            </div>
                            <input type="number" placeholder="bid start at" name="price" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Product category</span>
                            </div>
                            <select
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
                            <input type="text" name="condition" placeholder="product condition" className="input input-bordered w-full max-w-xs" />
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
                            <textarea name="reason" className="textarea textarea-bordered h-24" placeholder="Write selling reason"></textarea>
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Write description of your product"></textarea>
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

export default AddBidPost;