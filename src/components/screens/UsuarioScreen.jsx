import React, { useState } from 'react';
import { useParams } from 'react-router';
//componets
import Nav from '../nav/nav_principal';
import { Link } from "react-router-dom";

//mocks
import userData from "../usuario/mocks/usuarios_mocks";
//style
import "../../styles/components/UsuarioScreen.css";
import EditUserFromix from "../presentational/UsuarioScreen/EditUserFromix"

export const UsuarioScreen = () => {

    const { id } = useParams();
    const [user, setUser] = useState(userData[id]);
    const [editarUsuario, setEditarUsuario] = useState(false);


    return (<>
        <Nav />
        <div className='UsuarioScreen'>
        {editarUsuario === false &&<>
                <div className='UsuarioScreen__Card'>
                    <div className='UsuarioScreen__list'>
                        <div className="UsuarioScreen__dato">ID:</div>
                        <div className="UsuarioScreen__dato">{id}</div>
                    </div>
                    <div className='UsuarioScreen__list'>
                        <div className="UsuarioScreen__dato">Name:</div>
                        <div className="UsuarioScreen__dato">{user.name}</div>
                    </div>
                    <div className='UsuarioScreen__list'>
                        <div className="UsuarioScreen__dato">Email:</div>
                        <div className="UsuarioScreen__dato">{user.email}</div>
                    </div>
                    <div className='UsuarioScreen__list'>
                        <div className="UsuarioScreen__dato">Password:</div>
                        <div className="UsuarioScreen__dato">{user.pass}</div>
                    </div>
                </div>
                <div className='flex-centerAll'>
                    <Link to={"/users/"}><button className="btn">BACK</button></Link>
                    <button className="btn" onClick={() => setEditarUsuario(true)}>EDIT</button>
                </div>
            </>}
            {editarUsuario === true && <>
                <div className="MovimientosAllScreen__AddMoveAll">
                    <EditUserFromix setUser={setUser} user={user} setEditarUsuario={setEditarUsuario} />
                    <button className="btn btn-form" type="submit" onClick={() => { setEditarUsuario(false) }}>Atras</button>
                </div>
            </>}
        </div>
    </>
    )
}

export default UsuarioScreen;