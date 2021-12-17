import React/* , { useState, useEffect } */ from 'react';
import { Link } from "react-router-dom";
//inicializador pokemon
/* import { obtenerClassType } from "../visualData/Types"; */
//styles
import "../../../styles/components/CardMovimientos.css";

function CardMovimiento({ pokeMove }) {
    let id = 1;
    let arrayURL = pokeMove.url.split('/');
    if (arrayURL[6]) {
        id = arrayURL[6];
    }
    return (
        <Link className="text-decore-none" to={"/moves/"+id}>
        <li>{pokeMove.name}</li>
        </Link>
    );
}

export default CardMovimiento;