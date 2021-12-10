import CardMovimiento from "./CardMovimiento";

export const MostrarMovimientos = ({movesAll}) => {
    return (
        movesAll.map((el, idx) => {
            return <CardMovimiento key={idx} name={el.name} url={el.url} />
        })
    )
}
export default MostrarMovimientos;