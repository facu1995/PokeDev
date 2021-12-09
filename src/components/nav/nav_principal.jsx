import { Link } from "react-router-dom";
//styles
import "../../styles/components/nav_principal.css";
function Nav() {
    return(
        <nav className="nav_principal">
            <ul className="nav_principal__ul">
                <li className="nav_principal__li"><Link to="/" className="nav_principal__a">mian</Link></li>
                <li className="nav_principal__li"><Link to="/home" className="nav_principal__a">home</Link></li>
                <li className="nav_principal__li"><Link to="/pokemon/1" className="nav_principal__a">pokemonEjemplo</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;