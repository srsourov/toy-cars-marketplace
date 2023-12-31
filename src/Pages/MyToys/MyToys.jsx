import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MySingleCar from './MySingleCar';

const MyToys = () => {
    useEffect(() => {
        document.title = 'My Toys';
      }, []);
    const { user } = useContext(AuthContext);
    const [carAdded, setCarAdded] = useState([]);

    const url = `https://toy-cars-marketplace-server.vercel.app/carAdded?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCarAdded(data)
                console.log(data)
            })
    }, [url]);


    const handleDelete = id => {
        const proceed = confirm("Are you sure you want to delete?")
        if (proceed) {
            fetch(`https://toy-cars-marketplace-server.vercel.app/carAdded/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remaining = carAdded.filter(car => car._id !== id);
                        setCarAdded(remaining)
                    }
                })
        }
    }
    return (
        <div className='my-8'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>sellerName</th>
                            <th>subcategory</th>
                            <th>price</th>
                            <th>rating</th>
                            <th>availableQuantity</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carAdded.map(car => <MySingleCar
                                car={car}
                                key={car._id}
                                handleDelete={handleDelete} 
                            ></MySingleCar>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;