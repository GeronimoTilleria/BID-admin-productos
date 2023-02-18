import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import ProductsAdd from "../pages/ProductsAdd";
import ProductUpdate from "../pages/ProductUpdate";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <ProductsAdd />,
            },
            {
                path: "/:id",
                element: <Product />,
            },
            {
                path: "/update/:id",
                element: <ProductUpdate />,
            }
        ]
    },
    
]);