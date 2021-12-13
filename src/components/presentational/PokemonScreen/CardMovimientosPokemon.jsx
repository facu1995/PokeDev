
import React from 'react';

//inicializador pokemon

function CardMovimientosPokemon({ pokeMove }) {
    
    return (
        <div className='CardMovimiento__movimientos'>
            <div>LEVEL</div>
            <div>{pokeMove.move.name}</div>
            <div>TIPO</div>
            <div>PODER</div>
        </div>
    );
}

export default CardMovimientosPokemon;