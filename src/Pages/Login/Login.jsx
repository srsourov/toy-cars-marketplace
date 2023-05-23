import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate(from, {replace: true})
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
                        <h2 className="text-center text-3xl font-bold">Login</h2>
                        <form onSubmit={handleLogin}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div>
                                <p className="text-red-600">{error}</p>
                            </div>
                        </form>
                        <div>
                            <p className="mb-4"><small>Dont have an account? <Link className="text-[#570DF8]" to="/registration">Register Now!</Link></small></p>
                            <hr />
                        </div>
                        <div className="text-center">
                            <p className="mb-4 text-center">OR</p>
                            <Link onClick={handleGoogleSignIn}><FaGoogle className="text-3xl text-center mx-auto text-[#570DF8]"></FaGoogle></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;