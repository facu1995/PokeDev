import CardMovimientosPokemon from "./CardMovimientosPokemon";

export const MostrarMovimientoPokemon = ({movesAll,EliminarPoder}) => {   
    return (
        movesAll.map((el, idx) => {
            return <CardMovimientosPokemon key={idx} pokeMove={el} local={el.local} EliminarPoder={EliminarPoder}/>
        })
    )
}
export default MostrarMovimientoPokemon;