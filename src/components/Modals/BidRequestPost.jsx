import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";


const BidRequestPost = ({ data, onClose }) => {
    const { _id, price, title, seller, image } = data
    const { user } = UseAuth();

    const handleRequestSubmit = async e => {
        e.preventDefault()
        if (user?.email === seller?.email) return toast.error('You are not granted for this post.')
        const form = e.target
        const postId = _id
        const postImage = image
        const bid_start = price
        const bid_price = parseFloat(form.bid_price.value)
        if (bid_price < bid_start) return toast.error('Sorry your bidding price is less then min bid price.')
        const post_title = title
        const status = 'Requested'
        const createdAt = new Date()
        const requestData = {
            postId,
            postImage,
            bid_start,
            bid_price,
            post_title,
            status,
            createdAt,
            seller_name: seller.name,
            seller_email: seller.email,
            seller_photo: seller.photo,
            bidder_name: user.displayName,
            bidder_email: user.email,
            bidder_photo: user.photoURL

        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/request`, requestData)
            if (data.insertedId) {
                toast.success('Request sent successfully!')
                onClose()
            }
        } catch (err) {
            toast.error('You have already sent a request for this volunteer post')
            console.log(err)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center opacity-100">
            <div className="bg-white w-1/2 md:w-1/3 lg:w-1/3 p-8 rounded-md shadow-lg">
                <p>Bid start for {title}</p>
                <form onSubmit={handleRequestSubmit}>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your name</span>
                            </div>
                            <input type="text" defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <div className="label">
                            </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Volunteer email?</span>
                            </div>
                            <input type="number" name="bid_price" placeholder="Your bid price" className="input input-bordered w-full max-w-xs" />
                            <div className="label">
                            </div>
                        </label>
                        {/* Conditional rendering for the button */}
                        <button className="mt-4 bg-blue-600 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded w-full max-w-xs">Bid post</button>
                    </div>
                </form>
                <button onClick={onClose} className="mt-4 bg-gray-200 hover:bg-gray-300 text-red-600 font-semibold py-2 px-4 rounded">
                    Close
                </button>
            </div>
        </div>
    );
};

export default BidRequestPost;