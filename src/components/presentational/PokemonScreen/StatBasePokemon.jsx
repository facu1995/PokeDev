import React from 'react'
import UsePokemon from "../../context/usePokemon";
const StatBasePokemon = () => {
    const pokemon = UsePokemon();
    return (
        <>
            <div><h4>StatBasePokemon</h4></div>
            <p>Nombre {pokemon.name} </p>
        </>
    )
}

export default StatBasePokemon;