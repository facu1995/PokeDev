import React, { useEffect, useState } from 'react';
//components
import NavPokemonAll from '../presentational/PokemonAllScreen/NavPokemonAll';
import ContenedorPokemons from "../presentational/PokemonAllScreen/ContenedorPokemons";
//style
import "../../styles/components/PokemonAllScreen.css";
export const PokemonAllScreen = () => {
    const [offset, setOffset] = useState(1);
    const [filtro, setFiltro] = useState("");
    const [pokemonAll, setPokemonAll] = useState([]);
    const limit = 8;
    const cantPokemonFetch = 300;
    const [cantMaximaPokemon, setCantMaximaPokemon] = useState(30);

    useEffect(() => {
        const obtenerPokemons = async (id) => {
            const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + cantPokemonFetch + "&offset=0");
            const dataJSON = await data.json();
            setPokemonAll(dataJSON.results);
        }
        obtenerPokemons();
    }, []);

    return (
        <div className="PokemonAllScreen">
            <NavPokemonAll offset={offset} limit={limit} setOffset={setOffset} filtro={filtro} setFiltro={setFiltro} cantMaximaPokemon={cantMaximaPokemon} cantPokemonFetch={cantPokemonFetch} />
            <ContenedorPokemons offset={offset} limit={limit} pokemonAll={pokemonAll} filtro={filtro} cantMaximaPokemon={cantMaximaPokemon} cantPokemonFetch={cantPokemonFetch} setCantMaximaPokemon={setCantMaximaPokemon} />
        </div>
    )
}
