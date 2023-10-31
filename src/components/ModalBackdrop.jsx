import { motion } from "framer-motion";
import style from "./ModalBackdrop.module.scss"

const ModalBackdrop = ({ children, onClick }) => {
    return ( 
        <motion.div
        className={style.modalBackdrop}
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
     );
};

export default ModalBackdrop;