import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from "../../form/move/form_validation/schema_validation/move_schema";
//error
import errorHandle from "../../form/move/form_validation/error_validation/move_errors";
//pokemon

export default function AddMoveAll({ setmovesAll,movesAll,setAgregarMoves }) {
    let initialValue = { name: "", type: "", power: "" };

    const fnValidationForm = (v) => { 
        alert(JSON.stringify(v))
        const {name} =v;
        setmovesAll([
            {name:name,url:"https://pokeapi.co/api/v2/move/999/"},
            ...movesAll
        ]);
        axios.post('http://localhost:4000/addmove', v)
            .then(function (response) {
            })
            .catch(function (error) {
            });
        setAgregarMoves(false);
    }
    return (
        <div className="AddMoveAll">
            <h3>Add Move</h3>
            <br/>
            <br/>
            <Formik
                initialValues={initialValue}
                validationSchema={Schema}
                onSubmit={fnValidationForm}>
                {({ errors }) => {
                    return (
                        <Form>
                            <section>
                                <Field name="name" className="input width-100" placeholder="name" />
                                {errorHandle(errors).name()}
                            </section>
                            <section>
                                <Field name="type" className="input width-100" placeholder="type" />
                                {errorHandle(errors).type()}
                            </section>
                            <section>
                                <Field name="power" className="input width-100" placeholder="power" />
                                {errorHandle(errors).power()}
                            </section>
                            <section>
                                {/* <Field name="description" className="input width-100" placeholder="description" />
                                {errorHandle(errors).description()} */}
                            </section>
                            <section>
                            <br/>
                                <button type="submit" className="btn btn-form">Save</button>
                            </section>
                        </Form>)
                }}
            </Formik>
        </div>
    )
}