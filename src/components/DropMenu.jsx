import MenuButton from "./MenuButton";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function DropMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenuIcon = () => {
        setMenuOpen(!menuOpen);
    }

    return ( 
        <>
        <MenuButton onClick={toggleMenuIcon} isOpen={menuOpen}/>
        {menuOpen ? (
            <section>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/attractions">Attractions</NavLink>
                <NavLink to="/tickets">Tickets</NavLink>
            </section>
        ) : null}
        </>
     );
}

export default DropMenu;