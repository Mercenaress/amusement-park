import DropMenu from "../components/DropMenu";
import TicketCard from "../components/TicketCard";
import style from "./TicketPage.module.scss";

function TicketPage() {
    return ( 
        <>
        <DropMenu/>
        <h1 className={style.pageTitle}>Tickets</h1>
        <section className={style.ticketCardWrap}>
            <TicketCard/>
        </section>
        </>
     );
}

export default TicketPage;