import React, { useState, useEffect } from 'react'
import UsePokemon from "../../context/usePokemon";
const PruebaModificarPokemon = ({ setPokemon }) => {
    const pokemon = UsePokemon();
    const [valorSelect, setValorSelect] = useState("");

    const EliminarPoder = (movimientoName) => {
        setPokemon({
            ...pokemon,
            moves: [...pokemon.moves.filter((el, idx) => { 
                if(el.move.name !== movimientoName){
                    return el;
                }
            })
            ]
        });
    }
    const Modificarnombre = () => {
        setPokemon({
            ...pokemon,
            name: "facu"
        });
        console.log(pokemon, pokemon.name);
    }

    const handleChange = (evt) => {
        setValorSelect(evt.target.value);
    }
    return (
        <div className="PruebaModificarPokemon">
            <h4>PruebaModificarPokemon</h4>
            <select name="MovimientoSelecionado" onChange={handleChange}>
                {pokemon.moves.map((el, idx) => {
                    return <option key={idx} value={el.move.name}>{el.move.name}</option>
                })}

            </select>
            <button onClick={() => { EliminarPoder(valorSelect) }}>Eliminar Poder</button>
            <button onClick={() => { Modificarnombre() }}>Cambiar Nombre</button>
            <p>{valorSelect}</p>

        </div>
    )
}

export default PruebaModificarPokemon;