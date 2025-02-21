import img2 from "../../assets/products/image 16.png";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Cont2 from "./cont2";

const Cont1 = () => {
  
  
  return (
    <>
      <div className="bg-gray-100 text-center px-6 sm:px-8 py-10 mt-2">
        
        <div className="text-[#42307D] w-full  text-center  px-4 lg:px-8">
          <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight">
            Find Your Dream Job with us
          </p>
          
          <p className="text-[#6941C6] mt-4 text-lg sm:text-base lg:text-lg">
            Assure you better tomorrow
          </p>
        </div>

        
      </div>
      <div className=" bg-gray-100  sticky top-0   ">
        <form
          action="/search"
          method="GET"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 rounded-lg shadow  bg-white mx-5 w-80  lg:w-[70%] lg:mx-[15%] md:mx-auto sm:w-150 "
        >
          {/* Job Search Input */}
          <div className="relative w-full">
            <FaSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              name="job"
              placeholder="Search by job or skill"
              aria-label="Job Search"
              className="border-r-2  pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-100 "
              required
            />
          </div>

          {/* Location Input */}
          <div className="relative w-full lg:ml-10">
            <FaMapMarkerAlt
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              aria-label="Location"
              className="pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full  "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition px-4 py-2 w-full   lg:w-50 lg:ml-30 sm:ml-40"
          >
            Find a job
          </button>
        </form>
      </div>
      <Cont2/>
    </>
  );
};

export default Cont1;
