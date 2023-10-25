import style from "./MenuButton.module.scss"
import MenuIcon from "./MenuIcon"
import CloseIcon from "./CloseIcon"

function MenuButton({onClick, isOpen}) {
  
    return ( 
       <button className={style.menuButton} onClick={onClick}>
        {isOpen? <CloseIcon/> : <MenuIcon/> }
       </button>
     );
}

export default MenuButton;