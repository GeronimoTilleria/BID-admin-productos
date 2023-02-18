import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import ProductsAdd from "../pages/ProductsAdd";

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
        ]
    },
    
]);