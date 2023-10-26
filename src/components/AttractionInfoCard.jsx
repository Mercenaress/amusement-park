import AttractionImg from "./AttractionImg";
import AttractionInfoText from "./AttractionInfoText";
import style from "./AttractionInfoCard.module.scss";

function AttractionInfoCard({titleText, bodyText, image}) {
    return ( 
        <article className={style.infoCardWrap}>
        <AttractionInfoText titleText={titleText} bodyText={bodyText}/>
        <AttractionImg image={image}/>
        </article>
     );
}

export default AttractionInfoCard;