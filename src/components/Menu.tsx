import './Menu.scss'
import { Link } from "react-router-dom";

const Menu = () => {

    const refresh = () => {
        window.location.href = "/"
    }

    return <div className='menu'>
        <img src="/pokeball.png" className="title-icon" alt="Main icon - pokeball"/>
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
        <div className="version" onClick={refresh}>
            v1.1.4
        </div>
    </div>
}

export default Menu;