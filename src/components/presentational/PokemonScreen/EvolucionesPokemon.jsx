import React from 'react'
//import UsePokemon from "../../context/usePokemon";
//style
//components
import CardPokemonEvoluciones from "../PokemonScreen/CardPokemonEvoluciones"
const EvolucionesPokemon = ({ evoluciones }) => {
    //const pokemon = UsePokemon();
    return (
        <>
            <div className="EvolucionesPokemon">
                <h2 className="EvolucionesPokemon__h2">Evoluciones: </h2>
                <div className="EvolucionesPokemon__container">
                {evoluciones.id.map((el, idx) => {
                    return <CardPokemonEvoluciones key={idx} name={evoluciones.name[idx]} url={'https://pokeapi.co/api/v2/pokemon/'+el} />
                })}
                </div>
        </div>
        </>
    )
}

export default EvolucionesPokemon;