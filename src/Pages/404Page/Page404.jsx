import { Link } from "react-router-dom";
import img from "../../assets/mobile_404.png"
import { useEffect } from "react";

const Page404 = () => {
    useEffect(() => {
        document.title = 'Error';
      }, []);
    return (
        <div >
            <img className='w-5/12 mx-auto' src={img} alt="" />
            <div className="text-center">
                <Link className="border py-5 px-4 font-bold" to="/"><button>Go Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Page404;