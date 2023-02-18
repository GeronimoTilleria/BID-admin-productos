import axios from 'axios';
import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const ProductsAdd = () => {

    // const [senal, setSenal] = useState(0);

    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const initialValue = {
        title: '',
        price: '',
        description: ''
    }

    const agregarProducto = (values, { resetForm }) => {
        console.log(values);
        axios.post('http://localhost:8000/api/products', values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setFormularioEnviado(true);
        // setSenal(senal + 1);
        resetForm();
        setTimeout(() => {
            setFormularioEnviado(false)
        }, 5000);
    };

    return (
        <>
            {/* <ProductForm senal={senal} setSenal={setSenal} initialValue={initialValue} setForm={agregarProducto} formularioEnviado={formularioEnviado} actionText='Create' /> */}
            <ProductForm initialValue={initialValue} setForm={agregarProducto} formularioEnviado={formularioEnviado} actionText='Create' />
            <hr />
            <ProductList senal={formularioEnviado} />
        </>
    )
}
export default ProductsAdd;
