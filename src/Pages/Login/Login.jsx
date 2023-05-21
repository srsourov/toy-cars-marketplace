import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-4">
            <div className="w-9/12 mx-auto">

                <div className="card flex mx-auto w-5/12 shadow-2xl bg-base-100 ">
                    
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-bold">Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p className="mb-4"><small>Don't have an account? <Link className="text-[#570DF8]" to="/registration">Register Now!</Link></small></p>
                            <hr />
                        </div>
                        <div className="text-center">
                            <p className="mb-4 text-center">OR</p>
                            <Link to={""}><FaGoogle className="text-3xl text-center mx-auto text-[#570DF8]"></FaGoogle></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;