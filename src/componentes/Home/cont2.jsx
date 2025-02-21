import img2 from "../../assets/products/image 2.png";
import { MdLocationOn } from "react-icons/md";
import bag from "../../assets/products/Vector.png";
import { Link } from "react-router-dom";
function Cont2() {
  const jobs = Array(10).fill({
    title: "Senior Manager",
    company: "Infotech",
    location: "Bangalore",
    experience: "5 Years of experience",
  });
  

  return (
    <div className="flex flex-col items-center p-6 bg-[#F9F5FF] min-h-screen  ">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 md:gap-6 gap-2 mt-10  w-[350px] md:w-auto  ">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border w-full border-gray-200 "
          >
            <div>
              <h3 className="text-sm lg:text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-500 text-sm lg:text-lg">{job.company}</p>
            </div>

            <div className="mt-4 text-gray-600 space-y-2">
              <p className="flex items-center text-sm lg:text-base space-x-2">
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
            <Link to="/jobdetails">
              <button className="mt-4 w-full py-2 border-2 border-purple-500 text-purple-500 font-semibold rounded-lg hover:bg-purple-100  transition cursor-pointer ">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <button className="mt-6 px-6 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-100 transition cursor-pointer">
        See more Jobs
      </button>
    </div>
  );
}

export default Cont2;
