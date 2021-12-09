import React, { useEffect, useState } from 'react';
import pokemonInit from '../../initializerJSON/pokemonInitJSON';
import "../../../styles/components/CardPokemon.css"
function CardPokemon({ id, name, url }) {
    const imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+id+".svg";

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
            <div className="CardPokemon">
            <h5 className="CardPokemon__name">{name}</h5>
            <img className="CardPokemon__img" src={imgSrc} alt="imagen"/>
            <p>tipo:{pokemon.types[0].type.name}</p>
            </div>
    )
}

export default CardPokemon;