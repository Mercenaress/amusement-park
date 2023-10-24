function TicketOptions({titleText, bodyText, price}) {
    return ( 
        <article>
            <section>
                <h5>{titleText}</h5>
                <p>{bodyText}</p>
            </section>
            <p>{price}€</p>
        </article>
     );
}

export default TicketOptions;