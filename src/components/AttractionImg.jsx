import style from "./AttractionImg.module.scss"
import { motion } from "framer-motion";

function AttractionImg({image}) {
    return ( 
        <>
        <section className={style.imgCard}>
            <div className={style.imgBackdrop}></div>
            <motion.div 
            whileHover={{ scale: 1.05 }}
            className={style.imageContainer}>
                <img src={image} alt="" />
            </motion.div>
        </section>
        </>
     );
}

export default AttractionImg;