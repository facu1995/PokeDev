import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario
import axios from "axios";
//Schema
import Schema from "../../form/pokemon/form_validation/schema_validation/pokemonEdit_schema";
//error
import errorHandle from "../../form/pokemon/form_validation/error_validation/pokemon_errors";

export default function EditPokemon({id,setEditarPokemon}) {
    let initialValue = { description: "",hp:"",attack:"",defense:"",specialAttack:"",specialDefense:"",speed:"" };

    const fnValidationForm = (v) => {
        alert(JSON.stringify(v))
        let body={
            id,
            ...v
        }
        axios.put('http://localhost:4000/editpokemon', body)
            .then(function (response) {
            })
            .catch(function (error) {
            });
        setEditarPokemon(false);
    }
    return (
        <div>
            <h3>Edit Pokemon</h3>
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
                                <Field name="description" className="input width-100" placeholder="description" />
                                {errorHandle(errors).description()}
                            </section>
                            <section>
                                <Field name="hp" className="input width-100" placeholder="hp" />
                                {errorHandle(errors).hp()}
                            </section>
                            <section>
                                <Field name="attack" className="input width-100" placeholder="attack" />
                                {errorHandle(errors).attack()}
                            </section>
                            <section>
                                <Field name="defense" className="input width-100" placeholder="defense" />
                                {errorHandle(errors).defense()}
                            </section>
                            <section>
                                <Field name="specialAttack" className="input width-100" placeholder="special attack" />
                                {errorHandle(errors).specialAttack()}
                            </section>
                            <section>
                                <Field name="specialDefense" className="input width-100" placeholder="special defense" />
                                {errorHandle(errors).specialDefense()}
                            </section>
                            <section>
                                <Field name="speed" className="input width-100" placeholder="speed" />
                                {errorHandle(errors).speed()}
                            </section>
                            <section>
                            <br/>
                                <button type="submit" className="btn btn-form">Recommend Pokemon</button>
                            </section>
                        </Form>)
                }}
            </Formik>
        </div>
    )
}