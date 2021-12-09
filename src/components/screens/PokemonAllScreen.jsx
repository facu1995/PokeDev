import React, { useEffect } from 'react'
import { useState } from 'react'
import { MyPokemonScreenDetails } from '../presentational/MyPokemonScreen/MyPokemonScreenDetails'
import { MyPokemonScreenHeader } from '../presentational/MyPokemonScreen/MyPokemonScreenHeader'


export const PokemonAllScreen = () => {
    const [offset, setOffset] = useState(1);
    const [pokemonAll, setPokemonAll] = useState([]);
    const [pokemonOne, setPokemonOne] = useState({});
    const limit = 8;

    /*  useEffect(() => {
         fetchPokemons();
     },[]);
  */
  /*   const fetchPokemon = async (id) => {

        return (dataJSON);
    } */
    const fetchPokemons = async() => {
        let pokemonArray = [];
        let i = offset;
        console.log(i, offset + limit);
        for (; i <= offset + limit; i++) {
            
            const data = await fetch('https://pokeapi.co/api/v2/pokemon/'+i)
            const dataJSON = await data.json();
            setPokemonOne(dataJSON);
            pokemonArray.push(dataJSON);
        }
        setPokemonAll(pokemonArray);
    }

    function decrementarOffset() {
        if (offset !== 1) {
            setOffset(offset-limit);
        }
    }

    function aumentarOffset() {
        setOffset(offset+limit);

    }

    return (
        <>
            <div>
            <p>{offset}</p>
            {pokemonAll.map((pokemon, idx) => {
                return <li key={idx}>{pokemon.name}</li>
            })}
            </div>
            <button className="PokemonAllScreen__btn_back" onClick={fetchPokemons}> buscar</button>
            <button className="PokemonAllScreen__btn_back" onClick={decrementarOffset}> atras</button>
            <button className="PokemonAllScreen__btn_next" onClick={aumentarOffset}> siguiente</button>
        </>
    )
}
