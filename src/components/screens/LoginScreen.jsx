import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from '../form/login/form_validation/schema_validation/login_schema';
//error
import errorHandle from '../form/login/form_validation/error_validation/login_errors';
import { useNavigate } from 'react-router-dom';


export const LoginScreen = () => {

    let initialValue = { email: "", pass: ""};
    const navigate = useNavigate();

    const fnValidationForm = (v) => { 
        alert(JSON.stringify(v));
        navigate('/home');
    }

    return (
        <div>
            <h3>LoginScreen</h3>
            <Formik
                initialValues={initialValue}
                validationSchema={Schema}
                onSubmit={fnValidationForm}>
                {({ errors }) => {
                    return (
                        <Form>
                            <section>
                                <Field name="email" placeholder="E-mail" />
                                {errorHandle(errors).email()}
                            </section>
                            <section>
                                <Field name="pass" placeholder="Password" />
                                {errorHandle(errors).pass()}
                            </section>
                            <section>
                                <button type="submit">Login</button>
                            </section>
                        </Form>)
                }}
            </Formik>
        </div>
    )
}
