import React from 'react'
import dataPokemon from '../mocks/pokemonData'



export const CallDataExample = () => {

    return (
        <div>
            <p>Nombre pokemon: {dataPokemon.name}</p>
            <p>Id Pokemon: {dataPokemon.id}</p>
            <p>Descripcion</p>
            <p>Tipos: {dataPokemon.types[0].type.name}</p>
            <p>Ataque: {dataPokemon.stats[1].base_stat}</p>
            <p>Defensa: {dataPokemon.stats[2].base_stat}</p>
            <p>Defensa esp: {dataPokemon.stats[4].base_stat}</p>
            <p>Speed: {dataPokemon.stats[5].base_stat}</p>
            <p>HP: {dataPokemon.stats[0].base_stat}</p>
            <p>Total</p>
            <p>Location: {dataPokemon.location_area_encounters}</p>
            <p>evolution xxxxxxxxx</p>
        


        </div>
    )
}
