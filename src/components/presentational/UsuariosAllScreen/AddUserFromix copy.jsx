import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from "formik";  //validar formulario
import { Input } from "reactstrap";

//Schema
import Schema from '../../form/addUser/form_validation/schema_validation/addUser_schema';
//error
import errorHandle from '../../form/addUser/form_validation/error_validation/addUser_errors';
//style
import "../../../styles/components/AddUserFromix.css";

export const AddUserFromix = ({ setAgregarUsuario }) => {

    let initialValue = { name: "", email: "", pass: "", imagefile: "" };

    const fnValidationForm = (v) => {
        axios.post('http://localhost:4000/registro/usuario', v, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
            })
            .catch(function (error) {
            });
        setAgregarUsuario(false);
    }

    return (
        <div className='AddUserFromixScreen'>
            <Formik
                initialValues={initialValue}
                validationSchema={Schema}
                onSubmit={fnValidationForm}>
                {({ errors }) => {
                    return (
                        <Form className='AddUserFromixScreen__form'>
                            <h3>CREATE NEW USER</h3>
                            <br />
                            <br />
                            <Input type='file' className="input width-100" name="imagefile" />
                            <Field className="input width-100" name="name" placeholder="Name" />
                            {errorHandle(errors).name()}
                            <Field className="input width-100" name="email" placeholder="E-mail" />
                            {errorHandle(errors).email()}
                            <Field className="input width-100" type="password" name="pass" placeholder="Password" />
                            {errorHandle(errors).pass()}
                            <br />
                            <button className='btn btn-form' type="submit">Create New User</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default AddUserFromix;