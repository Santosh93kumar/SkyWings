import img2 from "../../assets/products/image 16.png";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Cont1A from "./cont1-A";

const Cont1 = () => {
  // const box = [
  //   { number: "800+", text: "Total placement" },
  //   { number: "500+", text: "Active jobs" },
  //   { number: "200+", text: "Companies" },
  //   { number: "1500+", text: "Registered Users" },
  // ];
  return (
    <>
      <div className="bg-gray-100 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 py-10 mt-2">
        {/* Left Content */}
        <div className="text-[#42307D] w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-8">
          <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight">
            Find Your Dream Job or Hire
          </p>
          <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight">
            Talent With Assured Job
          </p>
          <p className="text-[#6941C6] mt-4 text-sm sm:text-base lg:text-lg">
            Find the right candidates quickly and efficiently. Start your
            journey with us today!
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0 px-4">
          <img
            src={img2}
            alt="Dream Job"
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto max-h-[400px] object-contain rounded-lg"
          />
        </div>
      </div>
      {/* <div className="bg-gray-100 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-screen-xl mx-auto">
          {box.map((items, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white shadow-md rounded-lg"
            >
              <p className="font-bold text-2xl text-[#647DE7]">
                {items.number}
              </p>
              <span>{items.text}</span>
            </div>
          ))}
        </div>

      </div> */}
      {/* <Cont1A></Cont1A>   */}

      {/* <div className=" bg-[#F9F5FF] sticky top-0"> */}
      <div className=" bg-gray-100  sticky top-0">
        <form
          action="/search"
          method="GET"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 rounded-lg shadow w-[80%] mx-[10%] bg-white "
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
              className="border-r-2 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
          </div>

          {/* Location Input */}
          <div className="relative w-full">
            <FaMapMarkerAlt
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              aria-label="Location"
              className="pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition px-4 py-2 sm:w-full  lg:w-70"
          >
            Find a job
          </button>
        </form>
      </div>
      <Cont1A></Cont1A>
    </>
  );
};

export default Cont1;
