import { Link } from "react-router-dom";
function Nav() {
    return(
        <nav>
            <ul>
                <li><Link to="/">mian</Link></li>
                <li><Link to="/pokemon/1">pokemonEjemplo</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;