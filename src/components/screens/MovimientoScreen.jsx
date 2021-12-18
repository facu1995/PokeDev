
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
//components
import { obtenerClassType } from "../presentational/visualData/Types";
import { useParams } from 'react-router';
import Spinner from '../img/spinner5.gif';

//styles
import "../../styles/components/MovimientoScreen.css";
import Nav from '../nav/nav_principal';

import pokeball from '../../components/img/PokeImgs/PokeBall.png'

export const MovimientoScreen = () => {
    const { id } = useParams();
    const [move, setMove] = useState({ id: "", power: "0", type: { name: "" } });
    const [pagNext, setPagNext] = useState(0);
    const [pagBack, setPagBack] = useState(0);
    const [spinner, setSpinner] = useState(true);


    useEffect(() => {
        setSpinner(true);
        const obtenerMove = async () => {
            /* const data = await fetch("https://pokeapi.co/api/v2/move/" + id); */
            const data = await fetch("http://localhost:4000/movesOne/" + id);
            const dataJSON = await data.json();
            setMove(dataJSON);
            setSpinner(false);
        }
        obtenerMove();

        if (id > 1) {
            setPagBack(parseInt(id) - 1);
        }
        if (id < 826) {
            setPagNext(parseInt(id) + 1);
        }
    }, [id])

    const spinnerOn = () => {
        return (
            <div className="flex-centerAll">
                <div className="spinner">
                    <div className="spinner__fondo"></div>
                    <img className='spinner__imagen' src={Spinner} alt="foto" />
                </div>
            </div>
        );
    }
    const spinnerOff = () => {
        return (
            <div className="MovimientoScreen">
                <img src={pokeball} alt="pokeBall" className='pokeBallBg' />
                <ul className="MovimientoScreen__ul">
                    <ul className="MovimientoScreen__ul__ul">
                        <li className="MovimientoScreen__li flex-align-center">ID:</li>
                        <li className="MovimientoScreen__li MovimientoScreen_flexRight" >{move.id}</li>
                    </ul>
                    <ul className="MovimientoScreen__ul__ul">
                        <li className="MovimientoScreen__li flex-align-center">Name:</li>
                        <li className="MovimientoScreen__li MovimientoScreen_flexRight" >{move.name}</li>
                    </ul>
                    <ul className="MovimientoScreen__ul__ul">
                        <li className="MovimientoScreen__li flex-align-center">TYPE-NAME:</li>
                        <li className="MovimientoScreen__li MovimientoScreen_flexRight" ><i>{move.type.name}</i>
                        </li>
                    </ul>
                    <ul className="MovimientoScreen__ul__ul">
                        <li className="MovimientoScreen__li flex-align-center">TYPE:</li>
                        <li className="MovimientoScreen__li MovimientoScreen_flexRight" >
                            <i className={obtenerClassType(move.type.name)}></i>
                        </li>
                    </ul>
                    <ul className="MovimientoScreen__ul__ul">
                        <li className="MovimientoScreen__li flex-align-center">POWER:</li>
                        <li className="MovimientoScreen__li MovimientoScreen_flexRight" >{move.power}</li>
                    </ul>
                </ul>
                <div>
                    <Link className="text-decore-none" to={"/moves/" + pagBack}><button className="btn" > atras</button></Link>
                    <Link className="text-decore-none" to={"/moves/" + pagNext}>  <button className="btn" > siguiente</button></Link>
                </div>
            </div>
        );
    }
    return (
        <>
            <Nav />
            {spinner === true && spinnerOn()}
            {spinner === false && spinnerOff()}
            <></>
        </>

    )
}

export default MovimientoScreen;