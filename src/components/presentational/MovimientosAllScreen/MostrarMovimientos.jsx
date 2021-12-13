import CardMovimiento from "./CardMovimiento";

export const MostrarMovimientos = ({movesAll}) => {
    return (
        movesAll.map((el, idx) => {
            return <CardMovimiento key={idx} pokeMove={el}/>
        })
    )
}
export default MostrarMovimientos;