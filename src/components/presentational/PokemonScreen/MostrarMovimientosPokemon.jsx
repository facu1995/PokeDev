import CardMovimientosPokemon from "./CardMovimientosPokemon";

export const MostrarMovimientoPokemon = ({movesAll}) => {
    console.log(movesAll)
    
    return (
        movesAll.map((el, idx) => {
            return <CardMovimientosPokemon key={idx} pokeMove={el}/>
        })
    )
}
export default MostrarMovimientoPokemon;