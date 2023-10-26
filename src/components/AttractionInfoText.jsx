import style from "./AttractionInfoText.module.scss"

function AttractionInfoText({titleText, bodyText}) {
    return ( 
        <section className={style.infoTextWrap}>
            <section>
                <h4 className={style.infoTitle} >{titleText}</h4>
                <p className={style.infoBody}>{bodyText}</p>
            </section>
            <button className={style.infoButton}>Learn More</button>
        </section>
     );
}

export default AttractionInfoText;