import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    const notify = () => toast.info(`Name: ${user?.displayName}`)

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>
        <li><Link to="/blog">Blogs</Link></li>

        {
            user?.email ? <>
                <li><Link to="/mytoys">My Toys</Link></li>
                <li><Link to="/addatoy">Add A Toy</Link></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
                <div className="avatar ml-4">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img onMouseEnter={notify} src={user.photoURL} alt="" />
                    </div>
                </div>
                <ToastContainer></ToastContainer>


            </>
                :
                <li><Link to="/login">Login</Link></li>
        }


    </>


    return (
        <div className="navbar bg-base-100 h-28 mb-4	">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl flex">
                    <img style={{ width: "50px", marginRight: "10px" }} src="https://cdn-icons-png.flaticon.com/512/1386/1386961.png" alt="" />
                    <h1 className="text-3xl">Toy Cars Market</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;