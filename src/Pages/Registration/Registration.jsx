import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";

const Registration = () => {
    useEffect(() => {
        document.title = 'Registration';
      }, []);
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = (event) => {
        setError("");
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
        .then(result => {
            const user = result.user; 
            setError("");
            setSuccess("Successfully Registered")
            updateUser(name, photo)
            .then(() => {
                console.log(user)
                form.reset();
            })
            .catch(error => {
                setError(error.message)
            })
        })
        .catch(error => {
            setError(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 mb-4">
            <div className="w-9/12 mx-auto">
                <div className="card flex mx-auto w-5/12 shadow-2xl bg-base-100 ">
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-bold">Register</h2>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <div>
                                <p className="text-red-600">{error}</p>
                                <p className="text-green-600">{success}</p>
                            </div>
                        </form>
                        <div>
                            <p className="mb-4"><small>Already Have an account? <Link className="text-[#570DF8]" to="/login">Login Now!</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;