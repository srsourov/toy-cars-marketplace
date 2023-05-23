import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';

const AddAToy = () => {
    const {user} = useContext(AuthContext);

    const notify = () => toast.success('Added successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    < ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyPic = form.toypicture.value;
        const toyName = form.toyname.value;
        const sellerName = form.sellername.value;
        const sellerEmail = form.selleremail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.quantity.value;
        const detailDescription = form.detaildescription.value;

        const caradded = {
            toyPic: toyPic,
            toyName: toyName,
            sellerName: sellerName,
            sellerEmail: sellerEmail,
            subcategory: subcategory,
            price: price,
            rating: rating,
            availableQuantity: availableQuantity,
            detailDescription: detailDescription
        }
        console.log(caradded)
        fetch("http://localhost:5000/carAdded", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(caradded)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    notify();
                    console.log(data)
                    form.reset();
                }
            })
    }
    return (
        <div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL of the toy</span>
                            </label>
                            <input required type="text" name="toypicture" placeholder="Picture URL of the toy" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input required type="text" name="toyname" placeholder="Toy Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input required type="text" name="sellername" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input required type="email" name="selleremail" defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <select name="subcategory" className="select select-bordered w-full">
                                <option selected>Formula 1 Cars</option>
                                <option>Sports Cars</option>
                                <option>Rally Cars</option>
                                <option>Monster Trucks</option>
                                <option>SUVs and Jeeps</option>
                                <option>Buggy Cars</option>
                                <option>Vintage Cars</option>
                                <option>Retro Muscle Cars</option>
                                <option>Antique Cars</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input required type="text" name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input required type="text" name="rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input required type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control w-[1200px]">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <input type="text" name="detaildescription" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Add Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;