import React from "react";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import img1 from "../assets/products/image 59.png";

export default function Career() {
  
  const Career = Array(10).fill({
    title: "Senior Manager",
    location: "Banglore",
    experience: "5 Year of experience",
  });

  return (
    <div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center bg-[#F5F5F5] p-6">
        <div className=" px-6 lg:px-22 mt-10 ">
          <span className="text-black font-semibold sm:text-sm lg:text-4xl">
            Careers at Assured Job
          </span>
          <p className="text-gray-800 mt-6">
            Working at Assured Job is a unique opportunity to help founders
            build their companies at all stages, providing unparalleled insight
            into the broader startup ecosystem.  recusandae dolorem inventore ex amet non nostrum.
          </p>
          <p className="text-gray-800 mt-3">
            Explore open positions across our software, investment, and
            operations teams below.
          </p>
        </div>

        <div className="">
          <img src={img1} alt="" className="mt-8 max-w-full" />
        </div>
      </div>

      <div className="bg-[#f5f5f5] px-6 lg:px-20 py-6">
        <h1 className="text-3xl font-bold text-purple-800 mb-5">
          Open Positions ({Career.length})
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 bg-white w-full p-1 rounded-lg shadow-md relative">
          <div className="relative flex-1">
            <CiSearch className="absolute top-3 left-3 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by job or skills"
              className="pl-10 pr-4 py-2 w-full outline-none rounded-lg "
              
            />
          </div>
          <div className="relative flex-1">
            <CiLocationOn className="absolute top-3 left-3 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Location"
              className="pl-10 pr-4 py-2 w-full border-l-2 border-gray-300 outline-none "
              
            />
          </div>
          <button className="bg-blue-500 text-white px-16 py-3 rounded">
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-9 bg-[#F5F5F5] p-4 mt-4 ">
          {Career.map((job, index) => (
            <div key={index} className="bg-[#F7F7F7] p-4 hover:shadow-lg ">
              <p className="font-medium">{job.title}</p>
              <p className="flex items-center mt-2 text-gray-600">
                <FaMapMarkerAlt className="inline-block mr-1 text-gray-500" />
                {job.location}
              </p>
              <p className="flex items-center mt-1 text-gray-600">
                <FaBriefcase className="inline-block mr-1 text-gray-500" />
                {job.experience}
              </p>
              <button className="mt-4 px-4 py-3 text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 rounded-lg font-medium ">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
