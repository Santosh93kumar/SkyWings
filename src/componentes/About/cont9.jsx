import ig1 from '../../assets/products/image 55.png'
import ig2 from '../../assets/products/image 56.png'
const Cont9=()=>{
    return(
        <>
        
        <div className="flex flex-col items-center px-4 mx-20">
  <p className="text-center lg:text-xl font-semibold max-w-2xl mb-4 w-80 md:w-auto ">
    Sky Wings Advisors helps Indian businesses build stable, long-term workforces. 
    Our permanent staffing solutions are designed to match candidates committed to 
    long-term growth with your company's values and goals. We handle the entire recruitment.
  </p>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:mx-8  mt-4  lg:max-w-6xl ">
    <img src={ig1} alt="Image 1" className="lg:w-fit h-auto w-full " />
    <img src={ig2} alt="Image 2" className="w-fit h-auto " />
    <div className="lg:col-span-2 lg:flex justify-center">
    <img src={ig2} alt="Image 3" className="w-fit h-auto rounded-lg " /></div>
  </div>
</div>

        </>
    );
};
export default Cont9