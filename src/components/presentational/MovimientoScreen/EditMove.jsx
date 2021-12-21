import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario
import axios from "axios";
//Schema
import Schema from "../../form/move/form_validation/schema_validation/move_schema";
//error
import errorHandle from "../../form/move/form_validation/error_validation/move_errors"
//pokemon
export default function EditMoveAll({move, setMove,id, setEditMoves }) {
    let initialValue = { name: "", type: "", power: "" };

    const fnValidationForm = (v) => {
        const { name, type, power } = v;
        let newMove = { id, name, type, power };
        setMove({
            ...move,
            name:name,
            type:{name:type},
            power:power
        });
        axios.put('https://back-poke.herokuapp.com/editMove', newMove)
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
                                <Field name="name"  className="input width-100" placeholder="name" />
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
{/*                                 <Field name="type" className="input width-100" placeholder="type" /> */}
                                {errorHandle(errors).type()}
                            </section>
                            <section>
                                <Field name="power"  className="input width-100" placeholder="power"/>
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