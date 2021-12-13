import CardMovimientosPokemon from "./CardMovimientosPokemon";

export const MostrarMovimientoPokemon = ({movesAll,EliminarPoder}) => {   
    return (
        movesAll.map((el, idx) => {
            return <CardMovimientosPokemon key={idx} pokeMove={el} EliminarPoder={EliminarPoder}/>
        })
    )
}
export default MostrarMovimientoPokemon;