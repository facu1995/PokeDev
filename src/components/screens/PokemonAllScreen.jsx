import React, { useEffect, useState } from 'react';

export const PokemonAllScreen = () => {
    const [offset, setOffset] = useState(1);
    const [pokemonAll, setPokemonAll] = useState([]);
    const limit = 9;

    useEffect(() => {
        async function fetchPokemonsAllData() {//Funcion que carga completa infomacion de los pokemones
            let pokemonArray = [];
            let i = offset;
            for (; i <= offset + limit; i++) {
                const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + i)
                const dataJSON = await data.json();
                pokemonArray.push(dataJSON);
            }
            setPokemonAll(pokemonArray);
        }
        const obtenerPokemons = async (id) => {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + "&offset=" + offset)
            const dataJSON = await data.json();
            console.log(dataJSON.results)
            setPokemonAll(dataJSON.results);
        }
        //constfetchPokemonsAllData();
        obtenerPokemons();
    }, [offset]);


    function decrementarOffset() {
        if (offset !== 1) {
            setOffset(offset - limit - 1);
        }
    }

    function aumentarOffset() {
        setOffset(offset + limit + 1);
    }

    return (
        <>
            <div>
                <p>Desde {offset} hasta {offset + limit}</p>
                {pokemonAll.map((pokemon, idx) => {
                    return <li key={idx}>{pokemon.name}</li>
                })}
            </div>
            <button className="PokemonAllScreen__btn_back" onClick={decrementarOffset}> atras</button>
            <button className="PokemonAllScreen__btn_next" onClick={aumentarOffset}> siguiente</button>
        </>
    )
}
