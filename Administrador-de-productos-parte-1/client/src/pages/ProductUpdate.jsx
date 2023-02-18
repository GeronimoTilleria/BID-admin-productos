import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const ProductUpdate = () => {
    const navigate = useNavigate();


    const { id } = useParams();

    const [producto, setProducto] = useState({
        title: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        const getProducto = async () => {
            const rpta = await axios.get(`http://localhost:8000/api/products/get/${id}`);
            setProducto({
                title: rpta.data.productoBuscado.title,
                price: rpta.data.productoBuscado.price,
                description: rpta.data.productoBuscado.description
            });
        }
        getProducto();
    }, [id]);

    const actualizarProducto = async (values, actions) => {

        try {
            const respuesta = await axios.put(`http://localhost:8000/api/products/update/${id}`, values);
            console.log(respuesta);
            navigate('/');
            // if (respuesta.status === 200){
            //     Swal.fire({
            //         icon: 'success',
            //         title: 'GENIAL!!!',
            //         text: `Se ha actualizado ${respuesta.data.nombre} perfectamente!`,
            //     });

            //     navigate('/personas');
            // }
        } catch (error) {
            console.log(error);
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Ops que mal!!!',
            //     text: `Error: ${error?.response?.data?.message || error.message}`,
            // })
        }
    }
    return (
        <div>
            <ProductForm initialValue={producto} setForm={actualizarProducto} formularioEnviado={false} actionText='Update' />
        </div>
    )
}

export default ProductUpdate;