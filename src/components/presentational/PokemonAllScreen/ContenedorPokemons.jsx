import React, { useEffect, useState } from 'react';
//componetes
import MostrarCard from './MostrarCard';
//style
import "../../../styles/components/ContenedorPokemons.css";

function ContenedorPokemons({ offset, limit, pokemonAll, filtro }) {
    const [pokemonArray, setPokemonAllArray] = useState([{ name: '', url: '' }]);

    useEffect(() => {
        let i = offset - 1;
        let auxArray = [];
        if (pokemonAll.length > 0) {
            for (; i <= offset + limit - 1; i++) {
                auxArray.push(pokemonAll[i]);
            }
            setPokemonAllArray(auxArray);
        }
    }, [limit, offset, pokemonAll])


    return (
        <>
            <h4>ContenedorPokemons</h4>
            <div className="ContenedorPokemons__container">
                {filtro === "" && <MostrarCard filtro={filtro} pokemonArray={pokemonArray} offset={offset}/>}
            </div>
        </>
    )
}

export default ContenedorPokemons;