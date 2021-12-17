import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from '../form/login/form_validation/schema_validation/login_schema';
//error
import errorHandle from '../form/login/form_validation/error_validation/login_errors';
import { useNavigate } from 'react-router-dom';
//audio



export const LoginScreen = () => {

    let initialValue = { email: "", pass: "" };
    const navigate = useNavigate();

    const fnValidationForm = (v) => {
        alert(JSON.stringify(v));
        navigate('/home');
    }

    const newUser = () => navigate('/newUser')

    return (

        <div className='LoginScreen'>
            <Formik
                initialValues={initialValue}
                validationSchema={Schema}
                onSubmit={fnValidationForm}>
                {({ errors }) => {
                    return (
                        <Form className='LoginScreen__form'>
                            <h3>LOGIN</h3>
                            <Field className="input" name="email" placeholder="E-mail" />
                            {errorHandle(errors).email()}

                            <Field className="input" name="pass" placeholder="Password" />
                            {errorHandle(errors).pass()}

                            <button className='btn LoginScreen__btndiv' type="submit">Login</button>
                            <button className='btn' type="button" onClick={newUser}>New User</button>
                        </Form>)
                }}
            </Formik>
        </div>
    )
}
