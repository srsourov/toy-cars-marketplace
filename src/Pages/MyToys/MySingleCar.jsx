import { Link } from "react-router-dom";

const MySingleCar = ({car, handleDelete }) => {
    const {toyPic, toyName,sellerName, subcategory, price, rating, availableQuantity, _id } = car;
    

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            {toyPic && <img src={toyPic} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {toyName}
            </td>
            <td>
                {sellerName}
            </td>
            <td>
                {subcategory}
            </td>
            <td>
                ${price}
            </td>
            <td>{rating}</td>
            <td>{availableQuantity}</td>
            <th>
                
                <Link to={`/carupdate/${_id}`} className="btn btn-primary btn-xs">Update</Link>
                
            </th>
        </tr>
    );
};

export default MySingleCar;