import React from 'react'
import { PokemonMoves } from './PokemonMoves'

export const MyPokemonScreenExpEvoLoc = () => {
    return (
        <section className = 'MyPokemonScreenExpEvoLoc'>
            <ul className = 'MyPokemonScreenExpEvoLoc__header'>
                <li>Evolutions</li>
                <li>Moves</li>
            </ul>
            <div className = 'MyPokemonScreenExpEvoLoc__moves'>
                <PokemonMoves />
            </div>
        </section>
    )
}
