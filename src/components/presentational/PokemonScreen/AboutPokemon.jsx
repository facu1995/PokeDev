import React from 'react'
import UsePokemon from "../../context/usePokemon";
import { CardPokemonAbout } from './CardPokemonAbout';
import '../../../styles/components/pokeTypes.css'
//import CardPokemon from '../PokemonAllScreen/CardPokemon';
const AboutPokemon = ({species} ) => {
    const pokemon = UsePokemon();
    return (
        <div className="AboutPokemon">

            <CardPokemonAbout />
            <div className='AboutPokemon__flex' >    
                <h5 className='GOLD'>INTRODUCTION</h5>
                <h2>About Me</h2>
                <hr className='AboutPokemon__hr'/>
                <p>{species.flavor_text_entries[0].flavor_text}</p>
                <p className='sign animate__animated animate__fadeIn '>Im {pokemon.name} </p>
            </div>
        </div>
    )

}

export default AboutPokemon;