import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCarRow from './SingleCarRow';

const AllToys = () => {
    
    const allCars = useLoaderData();

    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCars.map(car => <SingleCarRow
                                    car={car}
                                    key={car._id}
                                ></SingleCarRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;