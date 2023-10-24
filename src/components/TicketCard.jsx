import cartIcon from "../assets/cart.svg"
import TicketInformationCard from "./TicketInformationCard";
import TicketOptions from "./TicketOptions";

function TicketCard() {
    return ( 
        <article>
            <button><img src={cartIcon} alt="" /></button>
            <section>
                <TicketOptions titleText={'Day pass'} bodyText={'Entry + Free rides included'}/>
                <TicketOptions titleText={'Entrance'} bodyText={'Entrance to the park'}/>
                <TicketOptions titleText={'Weekend pass'} bodyText={'Entry + Free rides all weekend'}/>
                <TicketOptions titleText={'Year pass'} bodyText={'Entry + Free rides all year'}/>
            </section>
            <TicketInformationCard/>
        </article>
     );
}

export default TicketCard;