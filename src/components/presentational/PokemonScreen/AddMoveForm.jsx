import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from "../../form/move/form_validation/schema_validation/move_schema";
//error
import errorHandle from "../../form/move/form_validation/error_validation/move_errors";

//pokemon
import UsePokemon from "../../context/usePokemon";

//let initialValue = {id:"", move:{name: ""},type:{name:""},power:""};

export default function AgregarMovimiento({ setPokemon }) {
    let initialValue = { id: 0, name: "", type: "", power: 0 };
    const pokemon = UsePokemon();

    const fnValidationForm = (v) => { 
        alert(JSON.stringify(v))
        const {id,name,type,power} =v;
        setPokemon({
            ...pokemon,
            moves: [{ local:1,name:name,id: id, move: { name: name }, type: { name: type }, power: power }, ...pokemon.moves]
        })
    }
    return (
        <div>
            <h3>::AgregarMovimiento</h3>
            <Formik
                initialValues={initialValue}
                validationSchema={Schema}
                onSubmit={fnValidationForm}>
                {({ errors }) => {
                    return (
                        <Form>
                            <section>
                                <Field name="id" placeholder="id" />
                                {errorHandle(errors).id()}
                            </section>
                            <section>
                                <Field name="name" placeholder="name" />
                                {errorHandle(errors).name()}
                            </section>
                            <section>
                                <Field name="type" placeholder="type" />
                                {errorHandle(errors).type()}
                            </section>
                            <section>
                                <Field name="power" placeholder="power" />
                                {errorHandle(errors).power()}
                            </section>
                            <section>
                                <button type="submit">Agregar Movimiento</button>
                            </section>
                        </Form>)
                }}
            </Formik>
        </div>
    )
}