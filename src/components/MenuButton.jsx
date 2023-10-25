import menuIcon from '../assets/menu.svg';
import style from "./MenuButton.module.scss"

function MenuButton() {
    return ( 
       <button className={style.menuButton} >
        <img src={menuIcon} alt="" />
       </button>
     );
}

export default MenuButton;