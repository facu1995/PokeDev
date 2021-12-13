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
            <img className="CardPokemonEvoluciones__img" src={imgSrc} alt="imagen pokemon" />
            <div className='CardPokemonEvoluciones__info'>
                <h5>Pokedex Number: "{id}"</h5>
                <h3 className="CardPokemonEvoluciones__name">{name}</h3>
                <p style={{background:'red'}}>ACA VA SPICES FLAVOR</p>
            </div>
        </div>
        </Link>
    )
}

export default CardPokemonEvoluciones;