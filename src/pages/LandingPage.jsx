import FerrisWheel from "../components/FerrisWheel";
import FerrisBase from "../assets/ferris-base.svg";
import style from "./LandingPage.module.scss";
import DropMenu from "../components/DropMenu";

function LandingPage() {
    return ( 
        <>
        <DropMenu/>
        <section className={style.headingWrapper} >
            <h1 className={style.pageTitle}>Amusement Park</h1>
        </section>
        <section className={style.ferrisWheelWrap}>
            <FerrisWheel/>
            <img className={style.ferrisBase} src={FerrisBase} alt="" />
        </section>
        </>
     );
}

export default LandingPage;