import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from "../../form/move/form_validation/schema_validation/move_schema";
//error
import errorHandle from "../../form/move/form_validation/error_validation/move_errors";
//pokemon

export default function AddMoveAll({ setAgregarMoves }) {
    let initialValue = { name: "", type: "", power: "" };

    const fnValidationForm = (v) => { 
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
                            <Field as="select"  className="input width-100" name="type"  >
                                    <option value="fire">fire</option>
                                    <option value="water">water</option>
                                    <option value="electric">electric</option>
                                    <option value="ground">ground</option>
                                    <option value="grass">grass</option>
                                    <option value="ghost">ghost</option>
                                    <option value="flying">flying</option>
                                    <option value="bug">bug</option>
                                    <option value="rock">rock</option>
                                    <option value="fighting">fighting</option>
                                    <option value="steel">steel</option>
                                    <option value="dragon">dragon</option>
                                    <option value="poison">poison</option>
                                    <option value="ice">ice</option>
                                    <option value="normal">normal</option>
                                    <option value="psychic">psychic</option>
                                    <option value="fairy">fairy</option>
                                    <option value="dark">dark</option>
                                </Field>
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