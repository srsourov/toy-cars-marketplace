import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Page404 from "../Pages/404Page/Page404";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import CarDetails from "../Pages/CarDetails/CarDetails";
import PrivateRoute from "./PrivatRoute";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import CarUpdate from "../Pages/CarUpdate/CarUpdate";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/carDetails/:id",
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader: ({params}) =>  fetch(`http://localhost:5000/car/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>,
                loader: () => fetch("http://localhost:5000/cars")
            },
            {
                path: "/addatoy",
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: "/mytoys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "/carupdate/:id",
                element: <PrivateRoute><CarUpdate></CarUpdate></PrivateRoute>,
                loader: ({params}) =>  fetch(`http://localhost:5000/caradded/${params.id}`)
            }
        ]
    },
    {
        path: "*",
        element: <Page404></Page404>
    }
])



export default router;