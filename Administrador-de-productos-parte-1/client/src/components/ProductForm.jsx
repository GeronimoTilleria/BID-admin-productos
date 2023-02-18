import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
//import '../stylesheets/ProductForm.css'

const ProductForm = ({ senal, setSenal }) => {

    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const validationProductSchema = Yup.object().shape({
        title: Yup.string()
            .required('El titulo es requerido'),
        price: Yup.number()
            .required('El precio es requerido')
            .positive("No puede ser un monto negativo"),
        description: Yup.string()
            .required('La descripcion es requerida')
            .max(50, 'Como maximo hasta 50 caracteres'),
    })

    return (
        <>
            <h3 className='text-center my-3'>Product Manager</h3>
            <Formik
                initialValues={{ title: '', price: '', description: '' }}
                validationSchema={validationProductSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    axios.post('http://localhost:8000/api/products', values)
                        .then(res => console.log(res))
                        .catch(err => console.log(err))
                    setFormularioEnviado(true);
                    setSenal(senal + 1);
                    resetForm();
                    setTimeout(() => {
                        setFormularioEnviado(false)
                    }, 5000);
                }}
            >
                <Form className='w-25 mx-auto d-flex flex-column gap-2'>
                    <div className="form-group row">
                        <label htmlFor="inputTitle" className="col-sm-4 col-form-label">Title</label>
                        <div className="col-sm-8 text-danger">
                            <Field name="title" type="text" id='inputTitle' className="form-control" />
                            <ErrorMessage name="title" />
                        </div>

                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPrice" className="col-sm-4 col-form-label">Price</label>
                        <div className="col-sm-8 text-danger">
                            <Field name="price" type="number" id='inputPrice' className="form-control" />
                            <ErrorMessage name="price" />
                        </div>

                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputDescription" className="col-sm-4 col-form-label">Description</label>
                        <div className="col-sm-8 text-danger">
                            <Field name="description" type="text" id='inputDescription' className="form-control" />
                            <ErrorMessage name="description" />
                        </div>

                    </div>
                    <div className="form-group row">
                        <div className="col-sm-5 mx-auto my-4">
                            <button type="submit" className="btn btn-primary btn-md w-100">Create</button>
                        </div>
                        {formularioEnviado && <div className="alert alert-success text-center" role="alert">Enviado exitosamente!!</div>}
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default ProductForm
