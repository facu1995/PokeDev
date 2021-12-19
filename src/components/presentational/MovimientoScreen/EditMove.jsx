import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario
import axios from "axios";
//Schema
import Schema from "../../form/move/form_validation/schema_validation/move_schema";
//error
import errorHandle from "../../form/move/form_validation/error_validation/move_errors"
//pokemon
export default function EditMoveAll({ move, setMove,id ,setEditMoves}) {
    let initialValue = {  name: "", type: "", power: ""};

    const fnValidationForm = (v) => { 
        const {name,type,power} =v;
        let newMove={id,name,type,power};
        alert(JSON.stringify(newMove));
        setMove({
            ...move, name:v.name,type:v.type,power:v.power
        })
        axios.put('http://localhost:4000/editMove', newMove)
            .then(function (response) {
            })
            .catch(function (error) {
            });
            setEditMoves(false);
    }
    return (
        <div>
            <h3>Edit Pokemon</h3>
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
                                <button type="submit" className="btn btn-form">Confirm</button>
                            </section>
                        </Form>)
                }}
            </Formik>
        </div>
    )
}