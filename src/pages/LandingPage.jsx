import FerrisWheel from "../components/FerrisWheel";
import FerrisBase from "../assets/ferris-base.svg";
import style from "./LandingPage.module.scss";
import DropMenu from "../components/DropMenu";
import { motion } from "framer-motion";

function LandingPage() {
    const MotionFerrisWheel = motion(FerrisWheel);
    return ( 
        <>
        <DropMenu/>
        <section className={style.headingWrapper} >
            <h1 className={style.pageTitle}>Amusement Park</h1>
        </section>
        <section className={style.ferrisWheelWrap}>
            <MotionFerrisWheel 
            animate={{rotate: 360, transition: { ease: "linear", duration: 25, repeat: Infinity}}}
            />
            <img className={style.ferrisBase} src={FerrisBase} alt="" />
        </section>
        </>
     );
}

export default LandingPage;