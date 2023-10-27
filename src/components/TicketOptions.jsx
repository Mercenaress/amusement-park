import style from "./TicketOptions.module.scss";

function TicketOptions({titleText, bodyText, price}) {
    return ( 
        <article className={style.ticketOptionWrap}>
            <section>
                <h4 className={style.optionTitle}>{titleText}</h4>
                <p className={style.optionBody}>{bodyText}</p>
            </section>
            <p className={style.optionPrice}>{price}€</p>
        </article>
     );
}

export default TicketOptions;