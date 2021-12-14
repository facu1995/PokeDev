import React, { useState } from 'react'
import UsePokemon from "../../context/usePokemon";
const PruebaModificarPokemon = ({ setPokemon }) => {
    const pokemon = UsePokemon();
    const [valorInput, setValorInput] = useState("");


    const handleChangeInput = (evt) => {
        setValorInput(evt.target.value);
    }
    const AddMoves = () => {
        setPokemon({
            ...pokemon,
            moves: [{move:{name:valorInput}},...pokemon.moves]
        })
    }
    return (
        <div className="PruebaModificarPokemon">
            <h3>PruebaModificarPokemon</h3>
                {pokemon.moves.map((el, idx) => {  
                    return <option key={idx} value={el.move.name}>{el.move.name}</option>
                })          
                } 
            <h4>Agregar Movimiento</h4>
            <input type="text" value={valorInput} onChange={handleChangeInput}></input>
            <button onClick={ AddMoves}>Agregar Movimiento</button> 
        </div>
    )
}

export default PruebaModificarPokemon;