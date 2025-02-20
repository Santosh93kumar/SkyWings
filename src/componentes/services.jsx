import img1 from '../assets/products/image 33.png'
import img2 from '../assets/products/image 35.png'
import img3 from '../assets/products/image 36.png'
import img4 from '../assets/products/image 37.png'
import img5 from '../assets/products/image 38.png'
import img6 from '../assets/products/image 39.png'
import img7 from '../assets/products/image 40.png'
import img8 from '../assets/products/image 41.png'
import img9 from '../assets/products/image 42.png'
import img10 from '../assets/products/image 43.png'
import img11 from '../assets/products/image 44.png'
import img12 from '../assets/products/image 45.png'
import img13 from '../assets/products/image 46.png'
import img14 from '../assets/products/image 47.png'
import img15 from '../assets/products/image 48.png'
import img16 from '../assets/products/image 49.png'
import img17 from '../assets/products/image 50.png'
import img18 from '../assets/products/image 51.png'
import img19 from '../assets/products/image 52.png'

import Cont5 from './Home/cont5'

function Services() {
    const list = [
      { title: "Permanent Staffing", image: img1 },
      { title: "Temporary Staffing", image: img2},
      { title: "Contract Staffing", image: img3},
      { title: "Executive Search", image: img4 },
      { title: "Recruitment Process Outsourcing (RPO)", image: img5},
      { title: "Skill Gap Assessment", image: img6},
      { title: "Internship Program Management", image: img7},
      { title: "Campus Recruitment Drives", image: img8},
      { title: "Graduate Trainee Programs", image: img9},
      { title: "Diversity & Inclusion Hiring Initiatives", image: img10 },
      { title: "Onboarding and Training Support", image: img11 },
      { title: "Pre-Placement Offer (PPO) Recruitment", image: img12 },
      {title:'Remote Talent Pooling', image:img13},
      {title:'Payroll Management', image:img14},
      {title:'Labour Compliance Management', image:img15},
      {title:'Freelance Recruiter Partnership', image:img16},
      {title:'Outplacement Services', image:img17},
      {title:'HR Consulting and Strategy', image:img18},
      {title:'Talent Mapping and Market Intelligence', image:img19},
      
    ];
  
    return (
      <>
      <div className="flex flex-col items-center p-6 bg-[#F5F5F5] min-h-screen">
        <span className="bg-purple-200 text-purple-700 text-xs font-semibold px-3 py-1 my-2 rounded-full">
        SERVICES
      </span>
        <p className="text-purple-700 mb-8 text-center max-w-2xl">
          Our complete assistance will be with you, and we guide you accordingly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-20 w-75 md:w-auto lg:w-auto ">
          {list.map((service, index) => (
            <div key={index} className="bg-[#F5F5F5]  overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <a href="#" className="text-blue-500 text-sm font-medium mt-2 inline-flex items-center">
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cont5/>
      </>
    );
  }
export default Services;