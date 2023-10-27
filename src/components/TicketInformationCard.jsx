import LargeButton from "./LargeButton";
import style from "./TicketInformationCard.module.scss"

function TicketInformationCard() {
    return ( 
        <article className={style.ticketInformationWrap}>
            <section>
                <h4 className={style.infoTitle}>Day pass</h4>
                <p className={style.infoBody}>Entry + Free rides on all attractions. Valid for the entire visit.</p>
            </section>
            <p className={style.infoPrice}>50€</p>
            <section className={style.ticketInputWrap}>
                <p className={style.tickets}>Tickets</p>
                <section className={style.ticketAmountWrap}>
                    <button className={style.amountButtons}>-</button>
                    <p className={style.ticketAmount}>1</p>
                    <button className={style.amountButtons}>+</button>
                </section>
                <LargeButton buttonText={'Add to cart'}/>
            </section>
        </article>
     );
}

export default TicketInformationCard;