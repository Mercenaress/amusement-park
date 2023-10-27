import style from "./LargeButton.module.scss"

function LargeButton({buttonText}) {
    return ( 
        <button className={style.largeButton}>{buttonText}</button>
     );
}

export default LargeButton;