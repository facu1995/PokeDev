import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from '../form/addUser/form_validation/schema_validation/addUser_schema';
//error
import errorHandle from '../form/addUser/form_validation/error_validation/addUser_errors';
import { useNavigate } from 'react-router-dom';
//audio
// import Audio from '../audio/audio';
import pokeball from '../../components/img/PokeImgs/PokeBall.png'

export const NewUserScreen = () => {

    let initialValue = { name: "", email: "", pass: "" };
    const navigate = useNavigate();

    const fnValidationForm = (v) => {
        axios.post('http://localhost:4000/add/user', v)
            .then(function (response) {
            })
            .catch(function (error) {
            });
        /* alert(JSON.stringify(v)); */
        navigate('/');
    }

    const goBack = () => navigate('/')

    return (
        <div className='NewUserScreen'>
            <Formik
                initialValues={initialValue}
                validationSchema={Schema}
                onSubmit={fnValidationForm}>
                {({ errors }) => {
                    return (
                        <Form className='NewUserScreen__form'>
                            <h3>CREATE <br /> <br /> NEW USER</h3>
                            <Field className="input input-big" name="name" placeholder="Name" />
                            {errorHandle(errors).name()}
                            <Field className="input input-big" name="email" placeholder="E-mail" />
                            {errorHandle(errors).email()}

                            <Field type="password" className="input input-big" name="pass" placeholder="Password" />
                            {errorHandle(errors).pass()}
                            <button className='btn' type="submit">Create New User</button>
                            <button className='btn NewUserScreen__btndiv' type="button" onClick={goBack}>Go Back</button>
                        </Form>)
                }}
            </Formik>
            <img src={pokeball} alt="pokeBall" className='pokeBallBg' />
            {/* <Audio/> */}
        </div>
    )
}
