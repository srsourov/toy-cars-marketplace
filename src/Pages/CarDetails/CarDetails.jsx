import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
    const carDetails = useLoaderData();
    const {toyNpicture, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detailedDescription,} = carDetails;
    return (
        <div>
            <h1>{toyName}</h1>
        </div>
    );
};

export default CarDetails;