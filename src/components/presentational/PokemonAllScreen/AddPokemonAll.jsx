import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from "../../form/pokemon/form_validation/schema_validation/pokemon_schema";
//error
import errorHandle from "../../form/pokemon/form_validation/error_validation/pokemon_errors";

export default function AddPokemonAll() {
    let initialValue = { id: 0, name: "", type: "", description: 0 };

    const fnValidationForm = (v) => {
        alert(JSON.stringify(v))
      /*   const { id, name, type, description } = v; */

    }
    return (
        <div>
            <h3>Add Pokemon</h3>
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
                                <Field name="id" className="input width-100" placeholder="id" />
                                {errorHandle(errors).id()}
                            </section>
                            <section>
                                <Field name="name" className="input width-100" placeholder="name" />
                                {errorHandle(errors).name()}
                            </section>
                            <section>
                                <Field name="type" className="input width-100" placeholder="type" />
                                {errorHandle(errors).type()}
                            </section>
                            <section>
                                <Field name="description" className="input width-100" placeholder="description" />
                                {errorHandle(errors).description()}
                            </section>
                            <section>
                            <br/>
                                <button type="submit" className="btn btn-form">Add Pokemon</button>
                            </section>
                        </Form>)
                }}
            </Formik>
        </div>
    )
}