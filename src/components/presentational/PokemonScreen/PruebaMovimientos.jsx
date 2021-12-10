import React from 'react'
import UsePokemon from "../../context/usePokemon";
const PruebaMovimientos = () => {
    const pokemon = UsePokemon();
    console.log(pokemon);
    return (
        <div className="PruebaMovimientos">
            <h4>PruebaMovimientos</h4>
            <p>Nombre {pokemon.name} </p>
        </div>
    )
}

export default PruebaMovimientos;