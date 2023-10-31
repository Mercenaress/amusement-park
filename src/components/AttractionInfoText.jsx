import style from "./AttractionInfoText.module.scss"
import { motion } from "framer-motion";

function AttractionInfoText({titleText, bodyText}) {
    return ( 
        <section className={style.infoTextWrap}>
            <section>
                <h4 className={style.infoTitle} >{titleText}</h4>
                <p className={style.infoBody}>{bodyText}</p>
            </section>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className={style.infoButton}>Learn More</motion.button>
        </section>
     );
}

export default AttractionInfoText;