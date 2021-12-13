import React, { useState } from 'react'
import "../../../styles/components/EvolucionesPokemon.css"
import CardPokemonEvoluciones from "../PokemonScreen/CardPokemonEvoluciones"
import UsePokemon from '../../context/usePokemon'
const MoviEvoPokemon = ({ evoluciones }) => {
    const pokemon = UsePokemon();

    const [MoviEvo, setMoviEvo] = useState('evo')

    return (
        <section className='MoviEvoPokemon'>
            
            {
                MoviEvo === 'evo' &&
                <>
                    <ul className='MoviEvoPokemon__select'>
                        <li className='GOLD MoviEvoPokemon__active'>Evolutions</li>
                        <li  >Moves</li>
                    </ul>     
                    <div className="EvolucionesPokemon">
                        <div className="EvolucionesPokemon__container">
                        {evoluciones.id.map((el, idx) => {
                            return <CardPokemonEvoluciones key={idx} name={evoluciones.name[idx]} url={'https://pokeapi.co/api/v2/pokemon/'+el } id = {pokemon.id} />
                        })}
                        </div>
                    </div>
                </>
            }
            {
                MoviEvo === 'mov' &&
                <>
                    <ul className='MoviEvoPokemon__select'>
                        <li>Evolutions</li>
                        <li className='GOLD MoviEvoPokemon__active'>Moves</li>
                    </ul>     
                    <div>Componente movimientos</div>
                </>
            }


        </section>
    )
}

export default MoviEvoPokemon;