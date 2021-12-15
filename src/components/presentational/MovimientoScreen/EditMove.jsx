import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from "../../form/pokemonMove/form_validation/schema_validation/pokemonMove_schema";
//error
import errorHandle from "../../form/pokemonMove/form_validation/error_validation/pokemonMove_errors";
//pokemon
export default function EditMoveAll({ setmovesAll,movesAll }) {
    let initialValue = { id: 0, name: "", type: "", power: 0 };

    const fnValidationForm = (v) => { 
        alert(JSON.stringify(v))
        const {id,name,type,power} =v;
        setmovesAll([
            {id:id,name:name,type:type,power:power,url:"https://pokeapi.co/api/v2/move/"+id},
            ...movesAll
        ]);
    }
    return (
        <div>
            <h3>::Agregar Movimiento</h3>
            <Formik
                initialValues={initialValue}
                validationSchema={Schema}
                onSubmit={fnValidationForm}>
                {({ errors }) => {
                    return (
                        <Form>
                            <section>
                                <Field name="id" className="input" placeholder="id" />
                                {errorHandle(errors).id()}
                            </section>
                            <section>
                                <Field name="name" className="input" placeholder="name" />
                                {errorHandle(errors).name()}
                            </section>
                            <section>
                                <Field name="type" className="input" placeholder="type" />
                                {errorHandle(errors).type()}
                            </section>
                            <section>
                                <Field name="power" className="input" placeholder="power" />
                                {errorHandle(errors).power()}
                            </section>
                            <section>
                                <button type="submit" className="btn">Agregar Movimiento</button>
                            </section>
                        </Form>)
                }}
            </Formik>
        </div>
    )
}