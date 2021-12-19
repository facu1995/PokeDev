import React, { useEffect, useState } from 'react';
//componetes
import MostrarCard from './MostrarCard';
//style
import "../../../styles/components/ContenedorPokemons.css";

function ContenedorPokemons({ offset, limit, pokemonAll, filtro, cantMaximaPokemon, setCantMaximaPokemon, cantPokemonFetch }) {
    const [pokemonArray, setPokemonAllArray] = useState([{ name: '', url: '' }]);
    //const [pokemonArrayFiltro, setPokemonAllArrayFiltro] = useState([{ name: '', url: '' }]);

    useEffect(() => {
        let i = offset - 1;
        let auxArray = [];
        let iterar;
        if (pokemonAll.length > 0) {
            if (filtro === "") {
                iterar = offset + limit > cantPokemonFetch ? cantPokemonFetch - 1 : offset + limit - 1;
                for (; i <= iterar; i++) {
                    auxArray.push(pokemonAll[i]);
                }
                setPokemonAllArray(auxArray);
            }
            else {
                let arrayFiltro = pokemonAll.filter(el => el.name.toUpperCase().includes(filtro.toUpperCase()));
                setCantMaximaPokemon(arrayFiltro.length);
                iterar = offset + limit > arrayFiltro.length ? arrayFiltro.length - 1 : offset + limit - 1;
                for (; i <= iterar; i++) {
                    auxArray.push(arrayFiltro[i]);
                }
                setPokemonAllArray(auxArray);
            }
        }
    }, [cantPokemonFetch, filtro, limit, offset, pokemonAll, setCantMaximaPokemon])


    return (
        <div className="ContenedorPokemons__container">
            {pokemonArray.length > 0 && <MostrarCard filtro={filtro} pokemonArray={pokemonArray} offset={offset} />}
            {pokemonArray.length === 0 && <h5>No se encontro ningun pokemon con el nombre: {filtro}</h5>}
        </div>
    )
}

export default ContenedorPokemons;