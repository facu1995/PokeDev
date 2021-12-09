import React from 'react'
import pokeTypes from '../../visualData/pokeTypes'

export const PokemonMoves = () => {
    return (
        <div className = 'PokemonMoves'>
             {/* Acomodar con grid */}
            <div className = 'PokemonMover__barHeader'>  
                <li>Level</li>   
                <li>Move</li>
                <li>Type</li>
                <li>Power</li>
            </div>
            {/* Acomodar con grid y agregar que no tenga overflow*/}
            <div className = 'PokemonMover__table'>
                <li>2</li>
                <li>Razor Leaf</li>
                <li><i className = {pokeTypes.leaf}> </i></li>
                <li>30</li>
            </div>
        </div>
    )
}
