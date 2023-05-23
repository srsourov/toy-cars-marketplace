import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const CarUpdate = () => {
    const car = useLoaderData();
    const {toyPic,toyName,sellerName,sellerEmail ,price,rating,availableQuantity,detailDescription, _id } = car;
    const { user } = useContext(AuthContext)


    const notify = () => toast.success('Updated successfully', {
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

    const handleUpdate = (event) => {
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

        const carUpdate = {
            toyPic,
            toyName,
            sellerName,
            sellerEmail,
            subcategory,
            price,
            rating,
            availableQuantity,
            detailDescription
        }
        console.log()
        fetch(`https://toy-cars-marketplace-server.vercel.app/caradded/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(carUpdate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                    notify(); 
            }
        })
    }


    
    return (
        <div>
            <div className="card-body">
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL of the toy</span>
                            </label>
                            <input defaultValue={toyPic} required type="text" name="toypicture" placeholder="Picture URL of the toy" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input defaultValue={toyName} required type="text" name="toyname" placeholder="Toy Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input defaultValue={sellerName} required type="text" name="sellername" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input defaultValue={sellerEmail} required type="email" name="selleremail" defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
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
                            <input defaultValue={price} required type="text" name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input defaultValue={rating} required type="text" name="rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input defaultValue={availableQuantity} required type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control w-[1200px]">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <input defaultValue={detailDescription} type="text" name="detaildescription" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Update Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CarUpdate;