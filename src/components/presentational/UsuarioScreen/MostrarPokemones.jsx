import React from 'react';
import HiredPokemon from "./HiredPokemon";
//style
/* import "../../../styles/components/MostrarPokemones.css"; */
export const MostrarPokemones = ({ pokemons }) => {
    return (
        <>
            {pokemons.map((id) => {
                return <HiredPokemon key={id} id={id} />
            })
            }
            {pokemons.length === 0 && <h5>does not have pokemon</h5>}
        </>
    )

}
export default MostrarPokemones;