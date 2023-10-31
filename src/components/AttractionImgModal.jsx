import style from "./AttractionImgModal.module.scss";
import ModalBackdrop from "./ModalBackdrop";
import { motion } from "framer-motion";

function AttractionImgModal({ handleClose }) {
    const dropAnimation = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
                damping: 25,
                stiffness: 500
            },
        },
        exit: {
            y: "-100vh",
            opacity: 0,
        }
    };

    return ( 
        <ModalBackdrop onClick={handleClose}>
        <motion.article 
        className={style.modalWrap}
        onClick={(e) => e.stopPropagation()}
        variants={dropAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <img className={style.image} src="https://cdn.discordapp.com/attachments/453688427133796355/1146038363506356275/image.png?ex=654a1a66&is=6537a566&hm=200e1b166c296eefa24e4882d4d59f42a9ce6cfc2e79437c4fccb66a813b1e68&" alt="" />
            <button onClick={handleClose} className={style.closeButton}>Close</button>
        </motion.article>
        </ModalBackdrop>
     );
}

export default AttractionImgModal;