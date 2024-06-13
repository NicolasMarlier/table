import './Menu.scss'
import { Link } from "react-router-dom";

const Menu = () => {
    return <div className='menu'>
        <Link
            to="/game/addition"
            className='button'>TABLES D'ADDITIONS</Link>
        <Link
            to="/game/multiplication"
            className='button'>TABLES DE MULTIPLICATIONS</Link>
        <div className="separator"/>
        <Link
            to="/highscores"
            className='button'>MEILLEURS TEMPS</Link>
    </div>
}

export default Menu;