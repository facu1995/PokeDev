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
    const [cantMaximaPokemon, setCantMaximaPokemon] = useState(30);
    const [agregarPokemon, setAgregarPokemon] = useState(false);
    const [cantPokemonFetch, setCantPokemonFetch] = useState(301);

    useEffect(() => {
        const obtenerPokemons = async (id) => {
            /* const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + cantPokemonFetch + "&offset=0");  */
            const data = await fetch("https://back-poke.herokuapp.com/pokemon");
            const dataJSON = await data.json();
            setPokemonAll(dataJSON.results);
        }
        const obtenerCantMove = async () => {
            /* const data = await fetch("https://pokeapi.co/api/v2/move/" + id); */
            const data = await fetch("https://back-poke.herokuapp.com/pokemoncant");
            const dataJSON = await data.json();
            setCantPokemonFetch(dataJSON.cant);
        }
        obtenerPokemons();
        obtenerCantMove();
    }, [agregarPokemon]);

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
                        <AddPokemonAll pokemonAll={pokemonAll} setPokemonAll={setPokemonAll} setAgregarPokemon={setAgregarPokemon}/>
                        <button className="btn btn-form" type="submit" onClick={() => { setAgregarPokemon(false) }}>Back</button>
                    </>
                }
            </div>
        </>
    )
}
