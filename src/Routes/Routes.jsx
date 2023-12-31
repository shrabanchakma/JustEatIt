import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import CocaColaProducts from "../Pages/Home/BrandProducts/CocaColaProducts";
import NestleProducts from "../Pages/Home/BrandProducts/NestleProducts";
import McDonaldsProducts from "../Pages/Home/BrandProducts/McDonaldsProducts";
import KelloggsProducts from "../Pages/Home/BrandProducts/KelloggsProducts";
import StarBucksProducts from "../Pages/Home/BrandProducts/StarBucksProducts";
import PepsiCoProducts from "../Pages/Home/BrandProducts/PepsiCoProducts";
import AddProduct from "../Pages/AddProduct/AddProduct";
import ProductDetails from "../Pages/Home/BrandProducts/ProductDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProductUpdate from "../Pages/ProductUpdate/ProductUpdate";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/products/coca-cola",
        element: <CocaColaProducts />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/products/nestle",
        element: <NestleProducts />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/products/mcdonalds",
        element: <McDonaldsProducts />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/products/kelloggs",
        element: <KelloggsProducts />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/products/starbucks",
        element: <StarBucksProducts />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/products/pepsico",
        element: <PepsiCoProducts />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: `/product/:id`,
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: `/login`,
        element: <Login />,
      },
      {
        path: `/register`,
        element: <Register />,
      },
      {
        path: `/cart`,
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/carts"),
      },
      {
        path: `/product-update/:id`,
        element: <ProductUpdate />,
      },
    ],
  },
]);

export default Routes;
