import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import CategoryTab from "../components/CategoryTab";
import Review from "../components/Review";
import Feature from "../components/Feature";
import ExitingOffers from "../components/ExitingOffers";


const Home = () => {
    const posts = useLoaderData();
    return (
        <div>
            <Carousel/>
            <CategoryTab posts={posts}/>
            <ExitingOffers posts={posts}/>
            <Feature/>
            <Review/>
        </div>
    );
};

export default Home;