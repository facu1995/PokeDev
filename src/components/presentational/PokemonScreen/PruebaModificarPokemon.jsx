import React, { useState } from 'react'
import UsePokemon from "../../context/usePokemon";
const PruebaModificarPokemon = ({ setPokemon }) => {
    const pokemon = UsePokemon();
    /* const [valorSelect, setValorSelect] = useState(""); */
    const [valorInput, setValorInput] = useState("");

    /* const EliminarPoder = (movimientoName) => {
        setPokemon({
            ...pokemon,
            moves: [...pokemon.moves.filter(el => el.move.name !== movimientoName)
            ]
        });
        setValorSelect()
    }
    const Modificarnombre = () => {
        setPokemon({
            ...pokemon,
            name: "facu"
        });
        console.log(pokemon, pokemon.name);
    }
    const handleChangeSelect = (evt) => {
        setValorSelect(evt.target.value);
    } */
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
            {/* <h4>Borrar Movimiento</h4>
            <select value={valorSelect} name="MovimientoSelecionado" onChange={handleChangeSelect}>
                <option value=""></option>
                {pokemon.moves.map((el, idx) => {
                    return <option key={idx} value={el.move.name}>{el.move.name}</option>
                })}
            </select>
            <button onClick={() => { EliminarPoder(valorSelect) }}>Eliminar Poder</button> */}
            <h4>Agregar Movimiento</h4>
            <input type="text" value={valorInput} onChange={handleChangeInput}></input>
            <button onClick={ AddMoves}>Agregar Movimiento</button> 
        </div>
    )
}

export default PruebaModificarPokemon;