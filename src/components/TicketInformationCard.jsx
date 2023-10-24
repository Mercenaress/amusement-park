import LargeButton from "./LargeButton";

function TicketInformationCard() {
    return ( 
        <>
        <section>
            <h5>Day pass</h5>
            <p>Entry + Free rides on all attractions. Valid for the entire visit.</p>
        </section>
        <p>50€</p>
        <section>
            <label htmlFor="ticket">Tickets</label>
            <input type="number" name="ticket" />
            <LargeButton buttonText={'Add to cart'}/>
        </section>
        </>
     );
}

export default TicketInformationCard;