import React from 'react'
import pokemon from '../../img/PokeImgs/1.png'

export const MyPokemonScreenHeader = () => {
    return (
    <section className= 'MyPokemonScreenHeader'>
        <div className = 'MyPokemonScreenHeader__cont'>
            <div className = 'MyPokemonScreenHeader__imgCont'>
                <img src={pokemon} alt="Mi Pokemon" />
            </div>
            <div className = 'MyPokemonScreenHeader__imgFooter'>
                <h5 className = 'GOLD'>HI THERE! I'M </h5>
                <h3><span className = 'MyPokemonScreenHeader__blink'>[</span> Nombre Pokemon <span className = 'MyPokemonScreenHeader__blink'>]</span></h3>
            </div>

        <p><i className="fas fa-circle"></i> I'm avalaible for be your teamMate. Catch me!</p>
        </div>
    </section>
    )
}
