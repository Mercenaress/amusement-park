import { useState } from "react";
import style from "./AttractionImg.module.scss"
import { AnimatePresence, motion } from "framer-motion";
import AttractionImgModal from "./AttractionImgModal";

function AttractionImg({image}) {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return ( 
        <>
        <section
        onClick={() => (modalOpen ? close() : open())}
         className={style.imgCard}>
            <div className={style.imgBackdrop}></div>
            <motion.div 
            whileHover={{ scale: 1.05 }}
            className={style.imageContainer}>
                <img src={image} alt="" />
            </motion.div>
            <AnimatePresence
            initial={false}
            mode="Wait"
            >
                {modalOpen && <AttractionImgModal modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>
        </section>
        </>
     );
}

export default AttractionImg;