import React/* , { useState, useEffect } */ from 'react';
import { Link } from "react-router-dom";
//inicializador pokemon
/* import { obtenerClassType } from "../visualData/Types"; */
//styles
import "../../../styles/components/CardUsers.css";

function CardUser({ user, id }) {
    const idx=id+1
 /*    let img="UsuariosAllScreen__img UsuariosAllScreen__img"+idx; */
    return (
        <Link className="text-decore-none" to={"/users/" + id}>
            <div className="UsuariosAllScreen__card">
                {/* <div className= {img} alt="entrenador" /> */}
                <img  className="UsuariosAllScreen__img" src={process.env.PUBLIC_URL + `/entrenador/e${idx}.png`} alt="logo" />
                <h3>
                    <span className="MyPokemonScreenHeader__blink ">[</span> {user.name}{" "}
                    <span className="MyPokemonScreenHeader__blink">]</span>
                </h3>
                {/* <img src={`./e1.png`} alt="Entrenador"></img> */}
                {/* <img src={require(`../../img/entrenador/e1.png`)}  alt="Entrenador"/> */}
               {/*  <img src={ `./assets/heroes/${ id }.jpg` } className="card-img" alt={ superhero } /> */}
            </div>
        </Link>
    );
}

export default CardUser;