import cartIcon from "../assets/cart.svg"
import TicketInformationCard from "./TicketInformationCard";
import TicketOptions from "./TicketOptions";
import style from "./TicketCard.module.scss";

function TicketCard() {
    return ( 
        <article className={style.ticketsCard}>
            <button className={style.cartButton}><img src={cartIcon} alt="" /></button>
            <section className={style.ticketOptionsInfoWrap}>
                <section>
                    <TicketOptions titleText={'Entrance'} bodyText={'Entrance to the park'} price={"25"}/>
                    <TicketOptions titleText={'Day pass'} bodyText={'Entry + Free rides included'} price={"50"}/>
                    <TicketOptions titleText={'Weekend pass'} bodyText={'Entry + Free rides all weekend'} price={"75"}/>
                    <TicketOptions titleText={'Year pass'} bodyText={'Entry + Free rides all year'} price={"250"}/>
                </section>
                <TicketInformationCard/>
            </section>
        </article>
     );
}

export default TicketCard;