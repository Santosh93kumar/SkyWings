import img from '../../assets/products/image.png';

const Cont5 = () => {
  const profile = Array(8).fill({
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem culpa iste possimus minus ad ipsum expedita sed.',
    // image: img,
    image: img,
    name: 'Samantha Payne',
    ac: '@SamPanye12'
  });

  return (
    <>
    <div className="bg-purple-50 py-12 text-center px-4 ">
      <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
        TESTIMONIALS
      </span>
      <h1 className="text-4xl text-[#42307D] font-bold my-3">
        Don't just take our word for it
      </h1>
      <p className="text-purple-600 mt-4 text-lg">
        Read what our clients have to say
      </p>
      
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center mx-20">
        {profile.map((data, index) => (
          <div key={index} className=" w-full max-w-xs bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
            <p className="text-gray-700 text-sm mb-4">{data.text}</p>
            <div className="flex items-center mt-auto w-full">
              <img src={data.image} alt="Profile" className="w-12 h-12 rounded-full object-cover m-2" />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800">{data.name}</p>
                <span className="text-xs text-gray-500">{data.ac}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default Cont5;
