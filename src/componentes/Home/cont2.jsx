import { MdLocationOn } from "react-icons/md";
import bag from "../../assets/products/Vector.png";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import React , { useState } from "react";
import {jobs} from '../../data'
function Cont2() {
  const navigate = useNavigate();
  const [jobSearch, setJobSearch] = useState("");
    const [locationSearch, setLocationSearch] = useState("");
  
    const filteredJobs = jobs.filter((job) => 
      job.title.toLowerCase().includes(jobSearch.toLowerCase()) ||
      job.company.toLowerCase().includes(jobSearch.toLowerCase())
    ).filter((job) =>
      job.location.toLowerCase().includes(locationSearch.toLowerCase())
    ).slice(0,8)

  return (
    <>
   <div className="bg-gray-100 sticky top-15 p-4">
  <form
    action="/search"
    method="GET"
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-lg shadow bg-white mx-auto w-full max-w-4xl"
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
        value={jobSearch}
        onChange={(e) => setJobSearch(e.target.value)}
        placeholder="Search by job "
        aria-label="Job Search"
        className="pl-10 pr-4 py-2 w-full border-none rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
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
        value={locationSearch}
        onChange={(e) => setLocationSearch(e.target.value)}
        placeholder="Location"
        aria-label="Location"
        className="pl-10 pr-4 py-2 w-full border-none rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition px-4 py-2 w-full sm:w-auto"
    >
      Find a job
    </button>
  </form>
</div>

      <div className="flex flex-col items-center p-6 bg-[#F9F5FF] min-h-screen w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-10 w-full md:max-w-none">
    {filteredJobs.map((job, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 w-full"
      >
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
            {job.title}
          </h3>
          <p className="text-gray-500 text-sm lg:text-base">{job.company}</p>
        </div>

        <div className="mt-4 text-gray-600 space-y-2">
          <p className="flex items-center text-xs sm:text-sm lg:text-base space-x-2">
            <MdLocationOn className="text-purple-500" />
            <span>{job.location}</span>
          </p>
          <p className="flex items-center text-xs sm:text-sm lg:text-base space-x-2">
            <img src={bag} alt="Experience Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{job.experience}</span>
          </p>
        </div>

        <button
          onClick={() => navigate(`/jobdetails/${job.id}`)}
          className="mt-4 w-full py-2 border-2 font-semibold rounded-lg text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500 transition cursor-pointer"
        >
          View Details
        </button>
      </div>
    ))}
  </div>
</div>

    </>
  );
}

export default Cont2;
