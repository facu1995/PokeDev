import React from 'react'
import UsePokemon from "../../context/usePokemon";
const PruebaModificarPokemon = ({ setPokemon }) => {
    const pokemon = UsePokemon();

    const cambiarNombre = () => {
        setPokemon({
            ...pokemon,
            name:"Facundo"
        });
    }
    return (
        <div className="PruebaModificarPokemon">
            <h4>PruebaModificarPokemon</h4>
            <button onClick={cambiarNombre} >cambiar nombre</button>
        </div>
    )
}

export default PruebaModificarPokemon;