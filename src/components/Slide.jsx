import { Link } from "react-router-dom";


const Slide = ({image, text}) => {
    return (
        <div
      className='w-full bg-center bg-cover h-[30rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-5xl'>
            {text}
          </h1>
          <br />
          <h1 className="text-5xl text-white font-bold"><span className="text-orange-600">Bid</span><span className="text-purple-600">Day</span></h1>
          <br />
          <p className="mt-0 text-orange-400">Where Deals Await!</p>
          <br />
          <Link to='/need-volunteer' className='w-full px-5 py-4 mt-4 text-xl font-medium text-white capitalize transition-colors duration-300 transform bg-purple-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
           Start Bid
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Slide;