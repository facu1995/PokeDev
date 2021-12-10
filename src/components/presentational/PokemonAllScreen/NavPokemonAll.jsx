import React from 'react';

//components
import PaginaMoverNav from "./PaginaMoverNav";
//style
import "../../../styles/components/NavPokemonAll.css";
function NavPokemonAll({ offset, limit, setOffset, filtro, setFiltro, cantMaximaPokemon, cantPokemonFetch,page,setPage}) {
    
    const handleChange = (evt) => {
        setFiltro(evt.target.value);
        setOffset(1);
        setPage(1);
    }
    return (
        <div className="NavPokemonAll">
            <input className="NavPokemonAll__input" type="text" value={filtro} onChange={handleChange} name="filtro" placeholder="Buscar Pokemon" />
            <PaginaMoverNav offset={offset} limit={limit} setOffset={setOffset} filtro={filtro} cantMaximaPokemon={cantMaximaPokemon} cantPokemonFetch={cantPokemonFetch} page={page} setPage={setPage} />
        </div>
    )
}
export default NavPokemonAll;