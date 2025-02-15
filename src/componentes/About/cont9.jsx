import ig1 from '../../assets/products/image 55.png'
import ig2 from '../../assets/products/image 56.png'
const Cont9=()=>{
    return(
        <>
        
        <div className="flex flex-col items-center px-4 mx-20">
  <p className="text-center text-xl font-semibold max-w-2xl mb-4">
    Sky Wings Advisors helps Indian businesses build stable, long-term workforces. 
    Our permanent staffing solutions are designed to match candidates committed to 
    long-term growth with your company's values and goals. We handle the entire recruitment.
  </p>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:mx-8  mt-4 w-full max-w-6xl ">
    <img src={ig1} alt="Image 1" className="w-fit h-auto " />
    <img src={ig2} alt="Image 2" className="w-fit h-auto " />
    <div className="lg:col-span-2 lg:flex justify-center">
    <img src={ig2} alt="Image 3" className="wfit h-auto rounded-lg " /></div>
  </div>
</div>

        </>
    );
};
export default Cont9