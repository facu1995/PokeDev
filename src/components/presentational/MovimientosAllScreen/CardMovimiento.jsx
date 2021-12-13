
import React from 'react';

//inicializador pokemon

function CardMovimiento({ pokeMove }) {
    
    return (
        <div className='CardMovimiento__movimientos'>
            <div>LEVEL</div>
            <div>{pokeMove.name}</div>
            <div>TIPO</div>
            <div>PODER</div>
        </div>
    );
}

export default CardMovimiento;