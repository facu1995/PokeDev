
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
//components
import { obtenerClassType } from "../presentational/visualData/Types";
import { useParams } from 'react-router';

//styles
import "../../styles/components/MovimientoScreen.css";
export const MovimientoScreen = () => {
    const { id } = useParams();
    const [move, setMove] = useState({ id: "", power: "0", type: { name: "" } });
    const [pagNext, setPagNext] = useState(0);
    const [pagBack, setPagBack] = useState(0);


    useEffect(() => {
        const obtenerMove = async () => {
            const data = await fetch("https://pokeapi.co/api/v2/move/" + id);
            const dataJSON = await data.json();
            setMove(dataJSON);
        }
        obtenerMove();

        if (id > 1) {
            setPagBack(parseInt(id) - 1);
        }
        if (id < 826) {
            setPagNext(parseInt(id) + 1);
        }
        console.log(parseInt(id) - 1,parseInt(id) + 1);
    }, [id])

    /* const EliminarPoder = (movimientoName) => {
        setMove({
            moves: [...pokemon.moves.filter(el => el.move.name !== movimientoName)
            ]
        });
    } */
    return (
        <>
            <div className="MovimientoScreen">
                <ul className="MovimientoScreen__ul">
                    <ul className="MovimientoScreen__ul__ul">
                        <li className="MovimientoScreen__li flex-align-center">ID:</li>
                        <li className="MovimientoScreen__li flex-centerAll" >{move.id}</li>
                    </ul>
                    <ul className="MovimientoScreen__ul__ul">
                        <li className="MovimientoScreen__li flex-align-center">Name:</li>
                        <li className="MovimientoScreen__li flex-centerAll" >{move.name}</li>
                    </ul>
                    <ul className="MovimientoScreen__ul__ul">
                        <li className="MovimientoScreen__li flex-align-center">TYPE-NAME:</li>
                        <li className="MovimientoScreen__li flex-centerAll" ><i>{move.type.name}</i>
                        </li>
                    </ul>
                    <ul className="MovimientoScreen__ul__ul">
                        <li className="MovimientoScreen__li flex-align-center">TYPE:</li>
                        <li className="MovimientoScreen__li flex-centerAll" >
                            <i className={obtenerClassType(move.type.name)}></i>
                        </li>
                    </ul>
                    <ul className="MovimientoScreen__ul__ul">
                        <li className="MovimientoScreen__li flex-align-center">POWER:</li>
                        <li className="MovimientoScreen__li flex-centerAll" >{move.power}</li>
                    </ul>
                </ul>
                {/* <button className="flex-centerAll CardMovimientosPokemon__btn" onClick={() => { EliminarPoder(pokeMove.move.name) }}><i className="fas fa-trash-alt"></i></button> */}
                <div>
                <Link className="text-decore-none" to={"/moves/" + pagBack}><button className="btn" > atras</button></Link>
                    <Link className="text-decore-none" to={"/moves/" + pagNext}>  <button className="btn" > siguiente</button></Link>
                </div>
            </div>
        </>
    )
}
export default MovimientoScreen;