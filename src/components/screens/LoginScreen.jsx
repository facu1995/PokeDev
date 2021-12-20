import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from '../form/login/form_validation/schema_validation/login_schema';
//error
import errorHandle from '../form/login/form_validation/error_validation/login_errors';
import { useNavigate } from 'react-router-dom';
//audio
// import Audio from '../audio/audio';
import pokeball from '../../components/img/PokeImgs/PokeBall.png'

// import NavBurger from "../nav/nav_prueba/nav";

export const LoginScreen = () => {
    const [login,setLogin]= useState({token:false});
    let initialValue = { email: "", pass: "" };
    const navigate = useNavigate();

    const fnValidationForm = (v) => {
        /* alert('Bienvenido a PokeDev!'); */
        axios.post('http://localhost:4000/login', v)
            .then(function (response) {
                console.log(response.data);
                setLogin(response.data)
                if(response.data.token===false){
                    alert('the email or password are not valid!')
                }
                else{
                    navigate('/home');
                }
            })
            .catch(function (error) {
            });
        /* alert(JSON.stringify(v)); */
    }

/*     useEffect(() => {
        if(login===true){
            navigate('/home');
        }
    }, [login, navigate]) */

    const newUser = () => navigate('/newUser')

    return (

        <div className='LoginScreen'>
            {/* <NavBurger/> */}
            <Formik
                initialValues={initialValue}
                validationSchema={Schema}
                onSubmit={fnValidationForm}>
                {({ errors }) => {
                    return (

                        <Form className='LoginScreen__form'>
                            <h3>WELCOME TO <br /><br /> POKE DEV!</h3>
                            <Field className="input input-big" name="email" placeholder="E-mail" />
                            {errorHandle(errors).email()}

                            <Field type="password" className="input input-big" name="pass" placeholder="Password" />
                            {errorHandle(errors).pass()}

                            <button className='btn LoginScreen__btndiv' type="submit">Login</button>
                            <button className='btn' type="button" onClick={newUser}>New User</button>
                        </Form>)
                }}
            </Formik>

            <img src={pokeball} alt="pokeBall" className='pokeBallBg' />
            {/* <Audio /> */}

        </div>
    )
}
