import car1 from "../../assets/car1.jpg"
import car2 from "../../assets/car2.jpg"
import car3 from "../../assets/car3.jpg"
import car4 from "../../assets/car4.jpg"
import car5 from "../../assets/car5.jpg"
import car6 from "../../assets/car6.jpg"


const GallerySection = () => {
    return (
        <div className="mt-12 mb-12">
            <div className="text-center">
                <h1 className="text-5xl font-bold mt-8 mb-8">Our Models Gallery</h1>
            </div>
            <div className="grid grid-cols-3 gap-5 w-11/12 m-auto">
                <div className="rounded-lg border shadow-md"><img className="rounded m-auto" src={car1} alt="" /></div>
                <div className="rounded-lg border shadow-md"><img className="rounded m-auto" src={car2} alt="" /></div>
                <div className="rounded-lg border shadow-md"><img className="rounded m-auto" src={car3} alt="" /></div>
                <div className="rounded-lg border shadow-md"><img className="rounded m-auto" src={car4} alt="" /></div>
                <div className="rounded-lg border shadow-md"><img className="rounded m-auto" src={car5} alt="" /></div>
                <div className="rounded-lg border shadow-md"><img className="rounded m-auto" src={car6} alt="" /></div>
            </div>
        </div>
    );
};

export default GallerySection;