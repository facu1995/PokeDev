import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from '../form/newUser/form_validation/schema_validation/newUser_schema';
//error
import errorHandle from '../form/newUser/form_validation/error_validation/newUser_errors';
import { useNavigate } from 'react-router-dom';
//audio
// import Audio from '../audio/audio';
import pokeball from '../../components/img/PokeImgs/PokeBall.png'

export const NewUserScreen = () => {

    let initialValue = { email: "", pass: ""};
    const navigate = useNavigate();

    const fnValidationForm = (v) => { 
        alert(JSON.stringify(v));
        navigate('/home');
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
                                <h3>CREATE <br/> <br/> NEW USER</h3>
                                <Field className="input input-big" name="email" placeholder="E-mail" />
                                {errorHandle(errors).email()}

                                <Field className="input input-big" name="pass" placeholder="Password" />
                                {errorHandle(errors).pass()}

                                <Field className="input input-big" name="rePass" placeholder="Rewrite your Password" />
                                {errorHandle(errors).rePass()}

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
