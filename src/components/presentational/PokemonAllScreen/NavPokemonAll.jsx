import React, { useState,useEffect} from 'react';

import "../../../styles/components/NavPokemonAll.css";
function NavPokemonAll({ offset, limit, setOffset, filtro, setFiltro, cantMaximaPokemon, cantPokemonFetch }) {
    const [page,setPage]= useState(1);
    const [cantPage,setCantPage]= useState(1);
    
    useEffect(() => {
        if(filtro===""){
            setCantPage(Math.ceil(cantPokemonFetch/(limit+1)));
        }
        else{
            setCantPage(Math.ceil(cantMaximaPokemon/(limit+1)));
            console.log(cantMaximaPokemon);

        }
    },[cantMaximaPokemon, cantPokemonFetch, filtro, limit])

    const handleChange = (evt) => {
        setFiltro(evt.target.value);
        setOffset(1);
        setPage(1);
    }
    function decrementarOffset() {
        if (offset !== 1) {
            setOffset(offset - limit - 1);
            setPage(page-1);
        }
    }

    function aumentarOffset() {
        if (filtro === "") {
            if (offset + limit < cantPokemonFetch) {
                setOffset(offset + limit + 1);
                setPage(page+1);
            }
        }
        else{
            if (offset + limit < cantMaximaPokemon) {
                setOffset(offset + limit + 1);
                setPage(page+1);
            }
        }
        
    }
    return (
        <>
            <h4>Nav</h4>
            <input className="PokemonAllScreen__input"type="text" value={filtro} onChange={handleChange} name="filtro" placeholder="Filtro:" />
            <h4>page: {page} de {cantPage}</h4>
            <br/>
            <button className="PokemonAllScreen__btn" onClick={decrementarOffset}> atras</button>
            <button className="PokemonAllScreen__btn" onClick={aumentarOffset}> siguiente</button>
        </>
    )
}

export default NavPokemonAll;