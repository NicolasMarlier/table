import './Menu.scss'
import { Link } from "react-router-dom";

const Menu = () => {
    return <div className='menu'>
        <Link
            to="/game/addition"
            className='button'>TABLES D'ADDITION</Link>
        <Link
            to="/game/multiplication"
            className='button'>TABLES DE MULTIPLICATIONS</Link>
        <Link
            to="/highscores"
            className='button'>MEILLEURS TEMPS</Link>
    </div>
}

export default Menu;