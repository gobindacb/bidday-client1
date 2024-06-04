
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from '../assets/banner1.jpg';
import image2 from '../assets/bike1.jpg';
import image3 from '../assets/gadget1.jpg';
import image4 from '../assets/Household1.jpg';
import image5 from '../assets/cycle1.jpg';
import image6 from '../assets/flat1.jpeg';
import image7 from '../assets/car1.jpg';
import image8 from '../assets/banner2.png';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';


export default function Carousel() {


  return (
    <div className='container px-6 py-2 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={image1} text='Where Every Bid Sparks Opportunity!'/></SwiperSlide>
        <SwiperSlide><Slide image={image2} text='Making Every Bid Count!'/></SwiperSlide>
        <SwiperSlide><Slide image={image3} text='Your Gateway to Winning Deals!'/></SwiperSlide>
        <SwiperSlide><Slide image={image4} text='Your Journey to Winning Begins Here!'/></SwiperSlide>
        <SwiperSlide><Slide image={image5} text='Where Every Bid Opens a New Chapter!'/></SwiperSlide>
        <SwiperSlide><Slide image={image6} text='Your Marketplace for Buying and Selling Used Goods!'/></SwiperSlide>
        <SwiperSlide><Slide image={image7} text='Where Every Day is Auction Day!'/></SwiperSlide>
        <SwiperSlide><Slide image={image8} text='Turning Bids into Treasures!'/></SwiperSlide>
      </Swiper>
    </div>
  );
}