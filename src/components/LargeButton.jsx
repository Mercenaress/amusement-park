import style from "./LargeButton.module.scss"
import { motion } from "framer-motion";

function LargeButton({buttonText}) {
    return ( 
        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={style.largeButton}>{buttonText}</motion.button>
     );
}

export default LargeButton;