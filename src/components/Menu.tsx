import './Menu.scss'
import { Link } from "react-router-dom";

const Menu = () => {
    return <div className='menu'>
        <h1>TABLES</h1>
        <Link
            to="/game/addition"
            className='button'>NOUVELLE PARTIE - ADDITIONS</Link>
        <Link
            to="/game/multiplication"
            className='button'>NOUVELLE PARTIE - MULTIPLICATIONS</Link>
        <div className="separator"/>
        <Link
            to="/highscores"
            className='button'>MEILLEURS TEMPS</Link>
        <div className="version">
            v1.0.7
        </div>
    </div>
}

export default Menu;