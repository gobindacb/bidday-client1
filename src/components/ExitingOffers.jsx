import { Link } from "react-router-dom";
import BidPostCard from "./BidPostCard";



const ExitingOffers = ({ posts }) => {



    return (
        <div className="container px-12 mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-14">
                <div className="w-full"><h2 className="text-3xl md:text-6xl font-bold">Exiting offers</h2></div>
                <div className="w-full mt-5"> <p>Welcome to BidDays Exciting Offers section! Discover unbeatable deals on a wide range of products. From electronics to fashion, find items starting at incredible minimum bids. Engage in thrilling bidding wars and secure your desired items at prices you will love. Start bidding now for the ultimate savings!
                </p></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-10">
                {
                    posts?.reverse()
                        ?.slice(0, 3)
                        ?.map(post => <BidPostCard
                            key={post._id}
                            post={post}
                        ></BidPostCard>)
                }

            </div>
            <div className="flex justify-center items mb-6">
                <Link to='/all-recipes' className="btn btn-secondary text-white w-1/4 text-lg font-bold uppercase">
                    Show all Bid Posts
                </Link>
            </div>
        </div>
    );
};

export default ExitingOffers;