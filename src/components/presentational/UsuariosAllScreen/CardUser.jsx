import React/* , { useState, useEffect } */ from 'react';
import { Link } from "react-router-dom";
//inicializador pokemon
/* import { obtenerClassType } from "../visualData/Types"; */
//styles
import "../../../styles/components/CardUsers.css";
function CardUser({ user, id }) {
    const idx=id+1
    let img="UsuariosAllScreen__img UsuariosAllScreen__img"+idx;
    return (
        <Link className="text-decore-none" to={"/users/" + id}>
            <div className="UsuariosAllScreen__card">
                <div className= {img} alt="entrenador" />
                <h3>
                    <span className="MyPokemonScreenHeader__blink ">[</span> {user.name}{" "}
                    <span className="MyPokemonScreenHeader__blink">]</span>
                </h3>
            </div>
        </Link>
    );
}

export default CardUser;