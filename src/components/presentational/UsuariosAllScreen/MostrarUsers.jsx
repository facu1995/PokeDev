import React, { useEffect, useState } from 'react';
import CardUser from "./CardUser";
//style
import "../../../styles/components/MostrarUsers.css";
export const MostrarUsers = ({ userAll, filtro }) => {
    const [usuariosActuales, setUsuariosActuales] = useState(userAll);

    useEffect(() => {
        setUsuariosActuales([
            ...userAll.filter(el => el.name.toUpperCase().includes(filtro.toUpperCase()))
        ]);
    }, [filtro, userAll]);
    return (
        <div className="MostrarUsers">
            <ul className="MostrarUsers__ul">
            {usuariosActuales.map((el, idx) => {
                return <CardUser key={idx} user={el}  id={idx}/>
            })
            }
            {usuariosActuales.length === 0 && <h5>User {filtro} not found</h5>}
            </ul>
        </div>
    )

}
export default MostrarUsers;