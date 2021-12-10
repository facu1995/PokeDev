import React from 'react'
import UsePokemon from "../../context/usePokemon";
const PruebaMovimientos = () => {
    const pokemon = UsePokemon();
    console.log(pokemon);
    return (
        <div className="PruebaMovimientos">
            <h4>PruebaMovimientos</h4>
            <p>Movimientos </p>
            
        </div>
    )
}

export default PruebaMovimientos;