import { MdLocationOn } from "react-icons/md";
import { useParams } from "react-router-dom";
import bag from "../assets/products/Vector.png";
import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import { jobs } from "../data";
const JobDetails = () => {
  
  
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const closeModal = () => setIsOpen(false);
  const {id} = useParams();


  const job=jobs.find((job)=>job.id === Number(id));
  console.log(job.company);
  const [selectedJob, setSelectedJob] = useState(job);
  
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0czxrfs', 'template_vjhksjv', form.current, {
        publicKey: 'qiG11gfWE86es3ObM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="flex md:flex-row  w-full flex-col-reverse p-6 min-h-screen ">
        {/* ------------------------- Job Listings (Left Side) ------------------------- */}
        <div className="flex flex-col w-full md:w-6/12   items-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {jobs.map((job, index) => (
              <div key={index} className="bg-[#F7F7F7] rounded-2xl p-6">
                <div className="flex items-center space-x-3">
                  <div>
                    <h3 className="md:text-lg text-sm font-semibold">
                      {job.title}
                    </h3>
                    <p className="text-gray-500">{job.company}</p>
                  </div>
                </div>

                <div className="mt-4 text-gray-600 space-y-2">
                  <p className="flex items-center space-x-2">
                    <MdLocationOn />
                    <span>{job.location}</span>
                  </p>
                  <p className="flex items-center text-sm lg:text-base space-x-2">
                    <img src={bag} alt="" />
                    <span>{job.experience}</span>
                  </p>
                </div>

                <button
                  className="mt-4 w-full py-2 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-100 transition cursor-pointer"
                  onClick={() => navigate(`/jobdetails/${job.id}`)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------- Job Details (Right Side) ------------------------- */}
        {selectedJob && (
        <div className="bg-white w-full md:w-6/12 p-6 rounded-lg shadow-lg">
          
            <div>
              <h2 className="text-2xl font-bold text-purple-600">
                {job.title}
              </h2>
              <p className="mt-2 text-gray-700">
                <strong>Company:</strong> 
                {job.company}
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> 
                {job.location}
              </p>
              <p className="text-gray-700">
                <strong>Experience:</strong> 
                {job.experience}
              </p>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">About the Job:</h3>
                <p className="text-gray-600 mt-2">
                  {job.description}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                {job.details.responsibilities}
                </ul>
              </div>

              <div className="mt-4">
                <p className="text-gray-600">
                  <strong>Total Experience:</strong>{" "}
                  {job.experience}
                </p>
                <p className="text-gray-600">
                  <strong>Work Location:</strong>{" "}
                  {job.location}
                </p>
              </div>

              <button
                className="mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={toggleModal}
              >
                Apply Now
              </button>

              
            </div>
         
        </div>)};
      </div>

      {/*--------------------------- Modal toggle--------------------- */}
      <div>
        {isOpen && (
         
            <div className="fixed inset-0 flex items-center justify-center  z-50 p-4 bg-gray-50 ">
            <div
              className="relative w-full h-fit sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800"
              style={{ boxShadow: "10px 10px #2979FE" }}
            >
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

              <div className=" ">
                {/* Modal Body */}
                <form className="space-y-2" ref={form} onSubmit={sendEmail}>
                  {/* Name */}
                  <div>
                    <label className="block text-gray-600 text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      name="to_name"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm font-medium">
                      Applying for Company
                    </label>
                    <input
                     
                     value={`${job.company} - ${job.title}`} 
                       name="company_and_title"
                      readOnly
                      className="w-full p-2 border rounded-lg  focus:ring-2 outline-none"
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
                      name="to_email"
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
                    <div className="w-full sm:w-1/2">
                      <input
                        type="file"
                        className="w-full border border-purple-500 text-purple-600 py-2 rounded-lg cursor-pointer file:mr-2 file:py-1 file:px-2 file:border file:rounded-lg file:bg-purple-500 file:text-white hover:file:bg-purple-700"
                      />
                    </div>
                    {/* <button
                      type="submit"
                      value="send"
                      className="w-full sm:w-1/2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
                      onClick={() => alert(`Applied for: ${selectedJob.title}`)}
                    >
                      Submit
                    </button> */}
                    <input className="w-full sm:w-1/2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700" type="submit" 
                  onClick={() => alert(`Applied successfully: ${job.title}`)}
                    
                    value="Send" />
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

export default JobDetails;
