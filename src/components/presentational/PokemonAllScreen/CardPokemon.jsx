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
            
                <div className="contenedor1">
                  <div className="contenedor2">
                    <div className="CardPokemon">
                      <img className="CardPokemon__img" src={imgSrc} alt="imagen"/>
                      <h5 class="GOLD">HI THERE! I'M </h5>
                      <h3 className="CardPokemon__name"><span className = 'MyPokemonScreenHeader__blink'>[</span> {name} <span className = 'MyPokemonScreenHeader__blink'>]</span></h3>
                      <p>Tipo: {pokemon.types[0].type.name}</p>
                      </div>
                  </div>
                </div>
                
                
    )
}

export default CardPokemon;