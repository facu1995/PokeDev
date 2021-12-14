
import React, { useState, useEffect } from 'react';

import { obtenerClassType } from "../visualData/Types"

import "../../../styles/components/CardMovimientosPokemon.css"

function CardMovimientosPokemon({ pokeMove,local=0, EliminarPoder }) {
    const [move, setMove] = useState({ id: "", power: "0", type: { name: "" } });

    useEffect(() => {
        const obtenerMove = async () => {
            const data = await fetch(pokeMove.move.url)
            const dataJSON = await data.json();
            setMove(dataJSON);
        }
        obtenerMove();


    }, [pokeMove, pokeMove.move.url])
    return (
        <div className='CardMovimientosPokemon__movimientos'>
            <div className="flex-align-center">{move.id}</div>
            <div className="flex-align-center">{move.name}</div>
            <div className="flex-align-center">
                <i className={obtenerClassType(move.type.name)}></i>
            </div>
            <div className="flex-align-center">{move.power}</div>
            <button className="flex-centerAll CardMovimientosPokemon__btn" onClick={() => { EliminarPoder(pokeMove.move.name) }}><i className="fas fa-trash-alt"></i></button>
        </div>
    );
}

export default CardMovimientosPokemon;