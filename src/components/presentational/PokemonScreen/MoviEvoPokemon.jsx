import React, { useState } from 'react'
import "../../../styles/components/EvolucionesPokemon.css"
import CardPokemonEvoluciones from "../PokemonScreen/CardPokemonEvoluciones"
import UsePokemon from '../../context/usePokemon'
const MoviEvoPokemon = ({ evoluciones, species }) => {
    const pokemon = UsePokemon();

    const [MoviEvo, setMoviEvo] = useState('evo')

    const movieEvoState = (msg) => setMoviEvo( msg ==='evo'?'mov':'evo');



    return (
        <section className='MoviEvoPokemon'>
            
            {
                MoviEvo === 'evo' &&
                <>
                    <ul className='MoviEvoPokemon__select'>
                        <li className='GOLD MoviEvoPokemon__active'>Evolutions</li>
                        <li  onClick = {()=>{movieEvoState('evo')}}>Moves</li>
                    </ul>     
                    <div className="EvolucionesPokemon">
                        <div className="EvolucionesPokemon__container">
                        {evoluciones.id.map((el, idx) => {
                            return <CardPokemonEvoluciones key={idx} name={evoluciones.name[idx]} description = {evoluciones.description[idx]} url={'https://pokeapi.co/api/v2/pokemon/'+el } id = {pokemon.id} />
                        })}
                        </div>
                    </div>
                </>
            }
            {
                MoviEvo === 'mov' &&
                <>
                    <ul className='MoviEvoPokemon__select'>
                        <li onClick = {()=>{movieEvoState('mov')}}>Evolutions</li>
                        <li className='GOLD MoviEvoPokemon__active'>Moves</li>
                    </ul>     
                    <div>Componente movimientos</div>
                </>
            }


        </section>
    )
}

export default MoviEvoPokemon;