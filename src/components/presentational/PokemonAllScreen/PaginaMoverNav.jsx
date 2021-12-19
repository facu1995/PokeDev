import React, { useState,useEffect} from 'react';

import "../../../styles/components/PaginaMoverNav.css";
function PaginaMoverNav({ offset, limit, setOffset, filtro, cantMaximaPokemon, cantPokemonFetch,page,setPage }) {
    const [cantPage,setCantPage]= useState(1);
    
    useEffect(() => {
        if(filtro===""){
            setCantPage(Math.ceil(cantPokemonFetch/(limit+1)));
        }
        else{
            setCantPage(Math.ceil(cantMaximaPokemon/(limit+1)));

        }
    },[cantMaximaPokemon, cantPokemonFetch, filtro, limit])

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
        <div className="PaginaMoverNav">
            <br/>
            <button className="btn" onClick={decrementarOffset}> Previous</button>
            <button className="btn" onClick={aumentarOffset}> Next</button>
            <h4>Page {page} of {cantPage}</h4>
        </div>
    )
}

export default PaginaMoverNav;