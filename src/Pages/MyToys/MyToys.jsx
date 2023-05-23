import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [carAdded, setCarAdded] = useState([]);

    const url = `http://localhost:5000/carAdded?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCarAdded(data)
            })
    }, []);
    return (
        <div>

        </div>
    );
};

export default MyToys;