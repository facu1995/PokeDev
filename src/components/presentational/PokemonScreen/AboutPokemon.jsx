import React from 'react'
import UsePokemon from "../../context/usePokemon";
//import CardPokemon from '../PokemonAllScreen/CardPokemon';
const AboutPokemon = ({species} ) => {
    const pokemon = UsePokemon();
    return (
        <div className="AboutPokemon">

            {/* <CardPokemon /> */}
            <p style= {{background : 'red'}}>ACA VA CARD POKEMON, Faltan parametros</p>

            <h5 className='GOLD'>INTRODUCTION</h5>
            <h2>About Me</h2>
            <hr className='AboutPokemon__hr'/>
            <p>{species.flavor_text_entries[0].flavor_text}</p>
            <p className='sign animate__animated animate__fadeIn '>Im {pokemon.name} </p>
        </div>
    )

}

export default AboutPokemon;