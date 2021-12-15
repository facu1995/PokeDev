import React, { useEffect, useState } from 'react';
//components
import NavPokemonAll from '../presentational/PokemonAllScreen/NavPokemonAll';
import ContenedorPokemons from "../presentational/PokemonAllScreen/ContenedorPokemons";
import AddPokemonAll from '../presentational/PokemonAllScreen/AddPokemonAll';
import PaginaMoverNav from '../presentational/PokemonAllScreen/PaginaMoverNav';
//style
import "../../styles/components/PokemonAllScreen.css";
import Nav from '../nav/nav_principal';

export const PokemonAllScreen = () => {
    const [offset, setOffset] = useState(1);
    const [filtro, setFiltro] = useState("");
    const [pokemonAll, setPokemonAll] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 8;
    const cantPokemonFetch = 300;
    const [cantMaximaPokemon, setCantMaximaPokemon] = useState(30);
    const [agregarPokemon, setAgregarPokemon] = useState(false);

    useEffect(() => {
        const obtenerPokemons = async (id) => {
            const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + cantPokemonFetch + "&offset=0");
            const dataJSON = await data.json();
            setPokemonAll(dataJSON.results);
        }
        obtenerPokemons();
    }, []);

    return (
        <>
            <Nav />

            <div className="PokemonAllScreen">
                {agregarPokemon === false &&
                    <>
                        <NavPokemonAll offset={offset} limit={limit} setOffset={setOffset} filtro={filtro} setFiltro={setFiltro} cantMaximaPokemon={cantMaximaPokemon} cantPokemonFetch={cantPokemonFetch} page={page} setPage={setPage} setAgregarPokemon={setAgregarPokemon} />
                        <ContenedorPokemons offset={offset} limit={limit} pokemonAll={pokemonAll} filtro={filtro} cantMaximaPokemon={cantMaximaPokemon} cantPokemonFetch={cantPokemonFetch} setCantMaximaPokemon={setCantMaximaPokemon} />
                        <PaginaMoverNav offset={offset} limit={limit} setOffset={setOffset} filtro={filtro} cantMaximaPokemon={cantMaximaPokemon} cantPokemonFetch={cantPokemonFetch} page={page} setPage={setPage} />
                    </>
                }
                {agregarPokemon === true &&
                    <>
                        <AddPokemonAll pokemonAll={pokemonAll} setPokemonAll={setPokemonAll} />
                        <button className="btn btn-form" type="submit" onClick={() => { setAgregarPokemon(false) }}>Atras</button>
                    </>
                }
            </div>
        </>
    )
}
