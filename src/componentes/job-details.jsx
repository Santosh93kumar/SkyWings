import img2 from "../assets/products/image 2.png";
import { MdLocationOn } from "react-icons/md";
import bag from "../assets/products/Vector.png"
import React, { useState } from 'react';


const JobDtails = () => {
  const jobs = Array(10).fill({
    title: "Senior Manager",
    company: "Infotech",
    location: "Bangalore",
    experience: "5 Years of experience",
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const closeModal = () => setIsOpen(false);

  return (
    <> 
    <div className="grid lg:grid-cols-2 md:grid-cols-2 ">
    
        {/* -------------------------for jobs---------- ----------- */}
      <div className="flex flex-col items-center p-6 min-h-screen  ">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {jobs.map((job, index) => (
            <div key={index} className="bg-[#F7F7F7]  rounded-2xl p-6 ">
              <div className="flex items-center space-x-3">
                {/* <div className="w-12  ">
                  <img src={img2} alt="" />
                </div> */}
                <div>
                  <h3 className="md:text-lg text-sm font-semibold">{job.title}</h3>
                  <p className="text-gray-500">{job.company}</p>
                </div>
              </div>
              <div className="mt-4 text-gray-600 space-y-2">
                <p className="flex items-center space-x-2">
                  <span>
                    <MdLocationOn />
                  </span>{" "}
                  <span>{job.location}</span>
                </p>
                <p className="flex items-center text-sm lg:text-base space-x-2">
                  <span>
                    <img src={bag} alt="" />
                  </span>{" "}
                  <span>{job.experience}</span>
                </p>
              </div>
              <button className="mt-4 w-full py-2 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-100 transition cursor-pointer">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[75%] h-fit mx-auto p-6 bg-white rounded-2xl  border border-gray-200 mb-4 sm:mx-2 max-h-auto">
        <div className="rounded-2xl p-2 ">
          <div className="flex items-center space-x-3">
            <div className="w-12  ">
              <img src={img2} alt="img 2" />
            </div>
            <div>
              <p className="text-gray-800">Infotech</p>
            </div>
          </div>
          <h3 className="text-lg font-semibold">Senior Manager</h3>
          <div className="mt-4 text-gray-600 space-y-2">
            <p className="flex items-center space-x-2">
              <span>
                <MdLocationOn />
              </span>{" "}
              <span>Bangalore</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>
                <img src={bag} alt="" />
              </span>{" "}
              <span> 5+ Years of experience</span>
            </p>
          </div>
        </div>

        <button className="mt-4 w-50 bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 cursor-pointer "onClick={toggleModal}>
          Apply
        </button>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">About the job</h3>
          <p className="mt-2 ">Position Summary & Scope</p>
          <p className="text-gray-600 text-sm mt-2">
            The purpose of this role is creation and execution of Intellectual
            properties & collaborative content and provide
            integrated/experiential solutions for brands while driving strong
            new age media innovations.
          </p>
        </div>

        <div className="mt-4 text-sm text-gray-600 ">
          <p>
            <strong>Total Experience:</strong> 4+ years
          </p>
          <p className="mt-4">
            <strong>Location:</strong> WFO - Mumbai (CST)
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">
            Areas of Responsibility (key Result Areas)
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-2">
            <li>
              Identify consumer trends and build relevant, new age, platform
              agnostic, content-driven IPs
            </li>
            <li>Design and leverage relevant content for these platforms</li>
            <li>Structure these platforms to grow multiple revenue streams</li>
            <li>
              Build consumer participation by growing Offline & Online
              communities
            </li>
            <li>
              Strong revenue orientation with ability to execute and implement
            </li>
            <li>
              Work with brands to create customized partnership opportunities
            </li>
            <li>
              Gain revenue across Sponsorship, Brand Solutions, and Media spends
            </li>
            <li>Enable revenues through IP Execution</li>
            <li>Internal and External Stakeholder management</li>
          </ul>
        </div>
      </div>
      </div>
    
      




    <div>
      {/*--------------------------- Modal toggle--------------------- */}
      

      {/* Main modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center  z-50 p-4 bg-gray-50 ">
          <div className="relative w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800"style={{boxShadow: "10px 10px #2979FE"}}>
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                User Information
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                ✖
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-4" >
              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium">
                    Gender
                  </label>
                  <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium">
                    Contact
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 999 777 4321"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
                  <button
                    type="reset"
                    className="w-full sm:w-1/2 border border-purple-500 text-purple-600 py-2 rounded-lg hover:bg-purple-100"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>


    

    </>
  );
};
export default JobDtails;