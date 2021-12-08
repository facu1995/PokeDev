import React from 'react'
import dataPokemon from '../mocks/pokemonData'

export const CallDataExample = () => {
    return (
        <div>
            <p>Nombre pokemon: {dataPokemon.name}</p>
            <p>Id Pokemon: </p>
            <p>Descripcion</p>
            <p>Tipos</p>
            <p>Ataque</p>
            <p>Defensa</p>
            <p>Defensa esp</p>
            <p>speed</p>
            <p>hp</p>
            <p>total</p>
            <p>location</p>
            <p>evolution xxxxxxxxx</p>
        </div>
    )
}
