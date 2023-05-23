import Rating from "react-rating";
import iconFull from "../../assets/iconFull.png"
import iconEmpty from "../../assets/iconEmpty.png"
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
    const { picture, toyName, price, rating, _id } = car;

    return (
        <div style={{ boxShadow: "0px 0px 10px 0px #00000052" }} className="card w-96 bg-base-100">
            <figure className="rounded-2xl"><img className="w-[300px] h-[300px] m-auto rounded-2xl" src={picture} /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{toyName}</h2>
                <p className="text-left text-[#4406CB] font-bold">Price: ${price}</p>
                <p className="text-left">
                    <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol={<img width={[25]} src={iconEmpty} className="icon" />}
                    fullSymbol={<img width={[25]} src={iconFull} className="icon" />}
                />
                </p>
                <div className="card-actions justify-start">
                    <Link to={`/carDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;