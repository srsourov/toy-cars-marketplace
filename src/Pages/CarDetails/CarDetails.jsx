import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
    useEffect(() => {
        document.title = 'Car Details';
      }, []);
    const carDetails = useLoaderData();
    const { picture, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detailedDescription } = carDetails;
    return (
        <div className="hero min-h-screen bg-base-200 mb-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-6/12">
                    <img src={picture} className="max-w-[500px] rounded-lg shadow-2xl mx-auto" />
                </div>
                <div className="w-6/12 mx-auto">
                    <h1 className="text-4xl font-bold py-4">{toyName}</h1>
                    <p className="py-2 text-2xl"><b>Price:</b> ${price}</p>
                    <p className="py-2"><b>Seller Name:</b> {sellerName}</p>
                    <p className="py-2"><b>Seller Email:</b> {sellerEmail}</p>
                    <p className="py-2"><b>Seller Rating:</b> {rating}/5</p>
                    <p className="py-2"><b>Available Quantity:</b> {availableQuantity}pcs</p>
                    <p className="py-2"><b>Details:</b> {detailedDescription}</p> 
                </div>
            </div>
        </div>
    );
};

export default CarDetails;