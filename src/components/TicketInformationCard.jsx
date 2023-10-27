import LargeButton from "./LargeButton";

function TicketInformationCard() {
    return ( 
        <article>
            <section>
                <h5>Day pass</h5>
                <p>Entry + Free rides on all attractions. Valid for the entire visit.</p>
            </section>
            <p>50€</p>
            <section>
                <label htmlFor="ticket">Tickets</label>
                <input type="number" id="ticket" />
                <LargeButton buttonText={'Add to cart'}/>
            </section>
        </article>
     );
}

export default TicketInformationCard;