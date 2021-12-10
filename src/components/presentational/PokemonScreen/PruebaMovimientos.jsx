import React from 'react'
import UsePokemon from "../../context/usePokemon";
const PruebaMovimientos = () => {
    const pokemon = UsePokemon();
    return (
        <div className="PruebaMovimientos">
            <h4>PruebaMovimientos</h4>
            <p>Movimientos </p>
            {pokemon.moves.map((el, idx) => {
                return <li key={idx}>{el.move.name}</li>
            })
            }
        </div>
    )
}

export default PruebaMovimientos;