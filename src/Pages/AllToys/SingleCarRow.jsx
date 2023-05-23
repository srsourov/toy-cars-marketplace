import { Link } from "react-router-dom";

const SingleCarRow = ({car}) => {
    const {toyName, sellerName, subcategory, price, availableQuantity, _id} = car;
    return (
        <tr>
            <th>
            {sellerName}
            </th>
            <td>
            {toyName}
            </td>
            <td>
                {subcategory}
            </td>
            <td>${price}</td>
            <td>{availableQuantity}pcs</td>
            <th>

                <Link to={`/carDetails/${_id}`}><button  className="btn btn-primary btn-xs">View Details</button></Link>

            </th>
        </tr>
    );
};

export default SingleCarRow;