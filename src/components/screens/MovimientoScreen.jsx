
import React,{useState, useEffect } from 'react';
//components
import { obtenerClassType } from "../presentational/visualData/Types"; 
import { useParams } from 'react-router';
export const MovimientoScreen = () => {
    const { id } = useParams();
    const [move, setMove] = useState({ id: "", power: "0", type: { name: "" } });
    
    useEffect(() => {
        const obtenerMove = async () => {
            const data = await fetch("https://pokeapi.co/api/v2/move/"+id);
            const dataJSON = await data.json();
            setMove(dataJSON);
        }
        obtenerMove();
    }, [id]) 

    /* const EliminarPoder = (movimientoName) => {
        setMove({
            moves: [...pokemon.moves.filter(el => el.move.name !== movimientoName)
            ]
        });
    } */
    return (

        <div><h4>{id}</h4>
            <div className="flex-align-center">{move.id}</div>
            <div className="flex-align-center">{move.name}</div>
            <div className="flex-align-center">
                <i className={obtenerClassType(move.type.name)}></i>
            </div>
            <div className="flex-align-center">{move.power}</div>
            {/* <button className="flex-centerAll CardMovimientosPokemon__btn" onClick={() => { EliminarPoder(pokeMove.move.name) }}><i className="fas fa-trash-alt"></i></button> */}
        </div> 
    )
}
export default MovimientoScreen;