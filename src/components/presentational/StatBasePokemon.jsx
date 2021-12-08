import React from 'react'
import UsePokemon from "../context/usePokemon";
const StatBasePokemon = () => {
    const pokemon = UsePokemon();
    return (
        <>
            <div><h4>StatBasePokemon</h4></div>
            {console.log(pokemon)}
            <p>la variable pokemon tiene los datos del pokemon id</p>
            <h5>Nombre pokemon {pokemon.forms[0].name} </h5>
        </>
    )
}

export default StatBasePokemon;