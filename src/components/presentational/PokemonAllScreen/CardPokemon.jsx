import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
//inicializador pokemon
import pokemonInit from '../../initializerJSON/pokemonInitJSON';
//style

import "../../../styles/components/CardPokemon.css"
function CardPokemon({ name, url }) {
    let id = 1;
    let arrayURL = url.split('/');
    if (arrayURL[6]) {
        id = arrayURL[6];
    }
    const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + id + ".svg";
    const [pokemon, setPokemon] = useState(pokemonInit)
    useEffect(() => {
        obtenerPokemon(id);
    }, [id]);

    const obtenerPokemon = async (id) => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        const dataJSON = await data.json();
        setPokemon(dataJSON);
    }
    return (
        <Link to={"/pokemon/"+id}>
        <div className="CardPokemon">
            <h5 className="CardPokemon__name">{name}</h5>
            <img className="CardPokemon__img" src={imgSrc} alt="imagen" />
            <p>tipo:{pokemon.types[0].type.name}</p>
        </div>
        </Link>
    )
}

export default CardPokemon;