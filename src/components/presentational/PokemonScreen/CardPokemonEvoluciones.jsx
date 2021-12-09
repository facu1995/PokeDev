import React from 'react';
import { Link } from "react-router-dom";
//inicializador pokemon
//style
import "../../../styles/components/CardPokemonEvoluciones.css";

function CardPokemonEvoluciones({ name, url }) {
    let id = 1;
    let arrayURL = url.split('/');
    if (arrayURL[6]) {
        id = arrayURL[6];
    }
    const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + id + ".svg";

    return (
        <Link to={"/pokemon/"+id}>
        <div className="CardPokemonEvoluciones">
            <h5 className="CardPokemonEvoluciones__name">{name}</h5>
            <img className="CardPokemonEvoluciones__img" src={imgSrc} alt="imagen" />
        </div>
        </Link>
    )
}

export default CardPokemonEvoluciones;