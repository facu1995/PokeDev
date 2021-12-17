import { Link } from "react-router-dom";
//styles
import "../../styles/components/nav_principal.css";

import Intro from '../audio/intro.mp3'
import { Howl, Howler } from "howler";
import { useState } from "react";


function Nav() {
    const sound = new Howl({
        src: Intro,
        loop: true,
    });
    Howler.volume(0.6);

    const [music, setMusic] = useState(true)

    const playMusic = () => {
        music ? sound.play() : sound.stop() ;
        music ? setMusic(false) : setMusic(true)
        console.log(music)
    }

    return(
        <nav className="nav_principal">
        <div className="nav_principal__icono"></div>
            <ul className="nav_principal__ul">
                <li className="nav_principal__li"><Link to="/home" className="nav_principal__a">Pokemones</Link></li>
                <li className="nav_principal__li"><Link to="/moves" className="nav_principal__a">Moves</Link></li>
                <li className="nav_principal__li"><Link to="/users" className="nav_principal__a">Users</Link></li>
                <li className="nav_principal__li"><Link to="/" className="nav_principal__a">Sign off</Link></li>
                <li className="nav_principal__li"><button type="button" className="nav_principal__a nav_principal__btn-music" onClick={playMusic}><i className="fas fa-music"></i></button></li>
            </ul>
        </nav>
    )
}

export default Nav;