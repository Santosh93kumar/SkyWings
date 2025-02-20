// import React from "react";
// import { Link } from "react-router-dom";
// import img2 from "../assets/products/image 2.png";
// import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";
// import bag from "../assets/products/Vector.png";
// import bg1 from "../assets/products/BG (1).png";
// import bg2 from "../assets/products/BG (2).png";
// import Cont5 from "./Home/cont5";


// const Job = () => {
//   const jobs = Array(25).fill({
//     title: "Senior Manager",
//     company: "Infotech",
//     location: "Bangalore",
//     experience: "5 Years of experience",
//   });
//   return (
//     <>
//       {/* ---------------------------ALL Jobs------------- */}
//       <div className="flex flex-col items-center p-6 bg-[#F9F5FF] min-h-screen ">
//         {/* --------------------------search bar ---------------- */}
//         <div className=" bg-[#F9F5FF]  sticky top-0 ">
//           <form
//             action="/search"
//             method="GET"
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 rounded-lg shadow   bg-white mx-5 w-80 md:w-auto lg:w-full  "
//           >
//             {/* Job Search Input */}
//             <div className="relative w-full">
//               <FaSearch
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                 size={18}
//               />
//               <input
//                 type="text"
//                 name="job"
//                 placeholder="Search by job or skill"
//                 aria-label="Job Search"
//                 className="border-r-2 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//                 required
//               />
//             </div>

//             {/* Location Input */}
//             <div className="relative w-full">
//               <FaMapMarkerAlt
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                 size={18}
//               />
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location"
//                 aria-label="Location"
//                 className="pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition px-4 py-2 sm:w-full  lg:w-70"
//             >
//               Find a job
//             </button>
//           </form>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10 w-[350px] md:w-auto lg:w-auto">
//           {jobs.map((job, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
//             >
//               <div className="flex items-center space-x-3">
//                 <div className="w-12  ">
//                   <img src={img2} alt="" />
//                 </div>
//                 <div>
//                   <h3 className="md:text-lg text-sm font-semibold">{job.title}</h3>
//                   <p className="text-gray-500">{job.company}</p>
//                 </div>
//               </div>
//               <div className="mt-4 text-gray-600 space-y-2">
//                 <p className="flex items-center space-x-2">
//                   <span>
//                     <MdLocationOn />
//                   </span>{" "}
//                   <span>{job.location}</span>
//                 </p>
//                 <p className="flex items-center space-x-2">
//                   <span>
//                     <img src={bag} alt="" />
//                   </span>{" "}
//                   <span>{job.experience}</span>
//                 </p>
//               </div>
//               <Link to='/jobdetails'>
//               <button className="mt-4 w-full py-2 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-100  transition">
//                 View Details
//               </button></Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ---------------------------SUCCESS STORIES------------ */}

//       <div className="flex flex-col flex-wrap items-center p-6 bg-white text-gray">
//         <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
//           SUCCESS STORIES
//         </span>
//         <p className="text-purple-700 mb-8 text-center mt-2 max-w-2xl">
//           Our complete assistance will be with you, and we guide you
//           accordingly.
//         </p>
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
//   {/* Testimonial 1 */}
//   <div className="p-6 rounded-lg flex flex-col sm:flex-row items-center ">
//     <img src={bg1} alt="Priya" className="mb-4 sm:mb-0 sm:mr-4" />
//     <div className="text-center sm:text-left">
//       <p className="text-gray-700">
//         "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
//       </p>
//       <p className="text-lg font-medium mt-2">
//         Priya, <span className="text-gray-400 ml-2">Software Engineer</span>
//       </p>
//     </div>
//   </div>

//   {/* Testimonial 2 */}
//   <div className="p-6 rounded-lg flex flex-col sm:flex-row items-center ">
//     <img src={bg2} alt="Jenny Wilson" className=" mb-4 sm:mb-0 sm:mr-4" />
//     <div className="text-center sm:text-left">
//       <p className="text-gray-700">
//         "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
//       </p>
//       <p className="text-lg font-medium mt-2">
//         Jenny Wilson, <span className="text-gray-400 ml-2">Grower.io</span>
//       </p>
//     </div>
//   </div>
// </div>

//       </div>
//       <Cont5></Cont5>
//     </>
//   );
// };

// export default Job;


import React from "react";
import { Link } from "react-router-dom";
import img2 from "../assets/products/image 2.png";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import bag from "../assets/products/Vector.png";
import bg1 from "../assets/products/BG (1).png";
import bg2 from "../assets/products/BG (2).png";
import Cont5 from "./Home/cont5";


const Job = () => {
  const jobs = Array(25).fill({
    title: "Senior Manager",
    company: "Infotech",
    location: "Bangalore",
    experience: "5 Years of experience",
  });
  return (
    <>
      {/* ---------------------------ALL Jobs------------- */}
      <div className="flex flex-col items-center p-6 bg-[#F9F5FF] min-h-screen ">
        {/* --------------------------search bar ---------------- */}
        <div className=" bg-[#F9F5FF]  sticky top-0 ">
          <form
            action="/search"
            method="GET"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3 rounded-lg shadow bg-white mx-5 w-80 md:w-auto lg:w-full  "
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-6 mt-10 w-[350px] md:w-auto lg:w-auto">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                
                <div>
                  <h3 className="md:text-lg text-sm font-semibold">{job.title}</h3>
                  <p className="text-gray-500">{job.company}</p>
                </div>
              </div>
              <div className="mt-4  text-gray-600 space-y-2">
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
              <Link to='/jobdetails'>
              <button className="mt-4 w-full lg:py-2 py-1 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-100  transition">
                View Details
              </button></Link>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------SUCCESS STORIES------------ */}

      <div className="flex flex-col flex-wrap items-center p-6 bg-white text-gray">
        <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
          SUCCESS STORIES
        </span>
        <p className="text-purple-700 mb-8 text-center mt-2 max-w-2xl">
          Our complete assistance will be with you, and we guide you
          accordingly.
        </p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
  {/* Testimonial 1 */}
  <div className="p-6 rounded-lg flex flex-col sm:flex-row items-center ">
    <img src={bg1} alt="Priya" className="mb-4 sm:mb-0 sm:mr-4" />
    <div className="text-center sm:text-left">
      <p className="text-gray-700">
        "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
      </p>
      <p className="text-lg font-medium mt-2">
        Priya, <span className="text-gray-400 ml-2">Software Engineer</span>
      </p>
    </div>
  </div>

  {/* Testimonial 2 */}
  <div className="p-6 rounded-lg flex flex-col sm:flex-row items-center ">
    <img src={bg2} alt="Jenny Wilson" className=" mb-4 sm:mb-0 sm:mr-4" />
    <div className="text-center sm:text-left">
      <p className="text-gray-700">
        "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
      </p>
      <p className="text-lg font-medium mt-2">
        Jenny Wilson, <span className="text-gray-400 ml-2">Grower.io</span>
      </p>
    </div>
  </div>
</div>

      </div>
      <Cont5></Cont5>
    </>
  );
};

export default Job;

