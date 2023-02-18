import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const ProductsAdd = () => {

    const [senal, setSenal] = useState(0);

    return (
        <>
            <ProductForm senal={senal} setSenal={setSenal} />
            <hr />
            <ProductList senal={senal} />
        </>
    )
}
export default ProductsAdd;
