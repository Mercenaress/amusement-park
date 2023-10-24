import MenuButton from "../components/MenuButton";
import FerrisWheel from "../components/FerrisWheel";
import FerrisBase from "../assets/ferris-base.svg";

function LandingPage() {
    return ( 
        <>
        <section>
            <MenuButton/>
            <h1>Amusement Park</h1>
        </section>
        <section>
            <FerrisWheel/>
            <img src={FerrisBase} alt="" />
        </section>
        </>
     );
}

export default LandingPage;