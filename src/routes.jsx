import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/products/Products";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProductDetails from "./pages/products/ProductDetails";
import ProtectedRouter from "./ProtectedRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children :[
        {
            index : true,
            element : <Home />
        },
        {
            path: "products",
            element : <Products />
        },
        {
            path: "product/:id",
            element : <ProductDetails />
        },
        {
            path: "cart",
            element : 
            <ProtectedRouter>
                <Cart />
            </ProtectedRouter>
        },
        {
            path: "login",
            element : <Login />
        },
        {
            path: "register",
            element : <Register />
        }      
    ]
  },
]);


export default router;