import MenuButton from "./MenuButton";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from './DropMenu.module.scss';
import { AnimatePresence, motion } from "framer-motion";

function DropMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenuIcon = () => {
        setMenuOpen(!menuOpen);
    }

    const menuAnimations = {
        hidden: {
            x: -300,
        },
        visible: {
            x: 0,
            transition: {delayChildren: 0.01, staggerChildren: 0.3, duration: 1}
        },
        exit: {
            x: -300,
            transition: {duration: 0.5, staggerChildren: 0.1}
        }
    };

    return ( 
        <>
        <MenuButton onClick={toggleMenuIcon} isOpen={menuOpen}/>
        <AnimatePresence>
        {menuOpen ? (
        <motion.nav 
        variants={menuAnimations}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={style.dropMenuWrap}>
            <motion.section 
            variants={menuAnimations}
            className={style.menuLinks}>
                <motion.a variants={menuAnimations} key={1} href="/">Home</motion.a>
                <motion.a variants={menuAnimations} key={2} href="/attractions">Attractions</motion.a>
                <motion.a variants={menuAnimations} key={3} href="/tickets">Tickets</motion.a>
            </motion.section>
        </motion.nav>
        ) : null}
        </AnimatePresence>
        </>
     );
}

export default DropMenu;