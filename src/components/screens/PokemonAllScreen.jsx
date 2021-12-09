import React, { useEffect, useState } from 'react';
import NavPokemonAll from '../presentational/PokemonAllScreen/NavPokemonAll';
import ContenedorPokemons from "../presentational/PokemonAllScreen/ContenedorPokemons";
export const PokemonAllScreen = () => {
    const [offset, setOffset] = useState(1);
    const [filtro, setFiltro] = useState("");
    const [pokemonAll, setPokemonAll] = useState([]);
    const limit = 8;

    useEffect(() => {
        /* async function fetchPokemonsAllData() {//Funcion que carga completa infomacion de los pokemones
            let pokemonArray = [];
            let i = offset;
            for (; i <= offset + limit; i++) {
                const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + i)
                const dataJSON = await data.json();
                pokemonArray.push(dataJSON);
            }
            setPokemonAll(pokemonArray);
        } */
        const obtenerPokemons = async (id) => {
            //const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + "&offset=" + offset) dinamico
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=300&offset=0')
            const dataJSON = await data.json();
            console.log(dataJSON.results)
            setPokemonAll(dataJSON.results);
        }
        //fetchPokemonsAllData();
        obtenerPokemons();
    }, [offset]);


    return (
        <>
        <NavPokemonAll offset={offset} limit={limit} setOffset={setOffset} filtro={filtro} setFiltro={setFiltro}/>
        <p>Desde {offset} hasta {offset + limit}</p>
        <ContenedorPokemons offset={offset} limit={limit} pokemonAll={pokemonAll} filtro={filtro}/>
        </>
    )
}
