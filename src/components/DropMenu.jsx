import MenuButton from "./MenuButton";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from './DropMenu.module.scss';

function DropMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenuIcon = () => {
        setMenuOpen(!menuOpen);
    }

    return ( 
        <>
        <MenuButton onClick={toggleMenuIcon} isOpen={menuOpen}/>
        {menuOpen ? (
        <nav className={style.dropMenuWrap}>
            <section className={style.menuLinks}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/attractions">Attractions</NavLink>
                <NavLink to="/tickets">Tickets</NavLink>
            </section>
        </nav>
        ) : null}
        </>
     );
}

export default DropMenu;