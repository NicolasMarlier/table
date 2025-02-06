import { useState } from 'react';
import './Menu.scss'
import { Link } from "react-router-dom";

const Menu = () => {

    const refresh = () => {
        window.location.href = "/"
    }
    const [gameMode, setGameMode] = useState(undefined as GameMode | undefined)
    const possibleTables = [2, 3, 4, 5, 6, 7, 8, 9]
    const [tables, setTables] = useState(possibleTables)
    
    const tableToggled = (table: number) =>  tables.indexOf(table) > -1
    const toggleTable = (table: number) => {
        if(tables.indexOf(table) == -1) {
            setTables([...tables, ...[table]].toSorted())
        }
        else {
            setTables(tables.filter(t => t !== table))
        }
    }

    return <div className='menu'>
        <img src="/pokeball.png" className="title-icon" alt="Main icon - pokeball"/>

        <div className='table-toggles'>
            { possibleTables.map(table =>
                <div className={`table-toggle ${tableToggled(table) ? 'checked' : ''}`} onClick={() => toggleTable(table)}>{table}</div>
            ) }
        </div>

        <Link
            to={`/game/addition?tables=${tables.join(',')}`}
            className='button'>NOUVELLE PARTIE - ADDITIONS</Link>
        <Link
            to={`/game/multiplication?tables=${tables.join(',')}`}
            className='button'>NOUVELLE PARTIE - MULTIPLICATIONS</Link>
            
        <div className="separator"/>
        <Link
            to="/highscores"
            className='button'>MEILLEURS TEMPS</Link>
        <div className="version" onClick={refresh}>
            v1.3.0
        </div>
    </div>
}

export default Menu;