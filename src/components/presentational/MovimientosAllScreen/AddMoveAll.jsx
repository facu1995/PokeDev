import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from "../../form/move/form_validation/schema_validation/move_schema";
//error
import errorHandle from "../../form/move/form_validation/error_validation/move_errors";
//pokemon

export default function AddMoveAll({ setmovesAll,movesAll,setAgregarMoves }) {
    let initialValue = { id: 0, name: "", type: "", power: 0 };

    const fnValidationForm = (v) => { 
        alert(JSON.stringify(v))
        const {id,name,type,power} =v;
        setmovesAll([
            {id:id,name:name,type:type,power:power,url:"https://pokeapi.co/api/v2/move/"+id},
            ...movesAll
        ]);
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
                                <Field name="description" className="input width-100" placeholder="description" />
                                {errorHandle(errors).description()}
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