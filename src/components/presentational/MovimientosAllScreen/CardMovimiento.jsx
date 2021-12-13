
import React from 'react';

//inicializador pokemon

function CardMovimiento({ pokeMove }) {
    /* let id = 1;
    let arrayURL = url.split('/');
    if (arrayURL[6]) {
        id = arrayURL[6];
    }
    const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + id + ".svg";
    const [pokemon, setPokemon] = useState(pokemonInit)
    useEffect(() => {
        obtenerPokemon(id);
    }, [id]);

    const obtenerPokemon = async (id) => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        const dataJSON = await data.json();
        setPokemon(dataJSON);
    } */
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