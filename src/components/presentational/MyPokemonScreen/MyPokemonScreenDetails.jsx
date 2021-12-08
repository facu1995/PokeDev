import React from 'react'
import pokeTypes from '../visualData/pokeTypes'

export const MyPokemonScreenDetails = () => {
    return (
        <section className = 'MyPokemonScreenDetails'>
            <h5 className = 'GOLD'>INTRODUCTION</h5>
            <h3>Poke Id : 123</h3>
            <p>When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.</p>
        
            <div className = 'MyPokemonScreenDetails__types'>
                {/* ACA DEBERIA IR UN MAP CON LOS TIPOS DEL POKEMON */}
                {pokeTypes.bug} {pokeTypes.fire}{pokeTypes.water}
            </div>
        </section>
    )
}
