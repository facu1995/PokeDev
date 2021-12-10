import React from 'react'
import UsePokemon from "../../context/usePokemon";
const StatBasePokemon = () => {
    const pokemon = UsePokemon();
    return (
        <div className="StatBasePokemon">
            <h4>StatBasePokemon</h4>
            <p>Nombre {pokemon.name} </p>
        </div>
    )
}

export default StatBasePokemon;