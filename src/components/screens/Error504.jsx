import React from 'react'
import { Link } from 'react-router-dom'
import pokeBall from '../img/PokeImgs/PokeBall.png'

export const Error504 = () => {
    return (
        <div className='Error504'>
            <div>
                <h1>ERROR 404</h1>
                <h1>HAGA CLICK</h1>
                <Link to={ '/home' }> <h1 className='Error504__aqui'>AQUI</h1> </Link>
                <h1>PARA VOLVER ATRAS</h1>
            </div>
            <img src= {pokeBall} className='pokeBallBg' alt="Pokeball" />
        </div>
    )
}
