import React from 'react';
import axios from 'axios';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from "../../form/pokemon/form_validation/schema_validation/pokemon_schema";
//error
import errorHandle from "../../form/pokemon/form_validation/error_validation/pokemon_errors";

export default function AddPokemonAll({ setAgregarPokemon }) {
    let initialValue = { name: "", type: "", description: "", hp: "", attack: "", defense: "", specialAttack: "", specialDefense: "", speed: "", };

    const fnValidationForm = (v) => {
        /*   const { id, name, type, description } = v; */
        axios.post('http://localhost:4000/addpokemon', v)
            .then(function (response) {
            })
            .catch(function (error) {
            });
        setAgregarPokemon(false);
    }

    return (
        <div>
            <h3>Recommend Pokemon</h3>
            <br />
            <br />
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
                            <Field as="select"  className="input width-100" name="type" >
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
                                <br />
                                <button type="submit" className="btn btn-form">Recommend Pokemon</button>
                            </section>
                        </Form>)
                }}
            </Formik>
        </div>
    )
}