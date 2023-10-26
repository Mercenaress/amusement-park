import AttractionImg from "./AttractionImg";
import AttractionInfoText from "./AttractionInfoText";
import style from "./AttractionInfoCardMirror.module.scss";

function AttractionInfoCardMirror({image, titleText, bodyText}) {
    return ( 
        <article className={style.infoCardWrap}>
        <AttractionImg image={image}/>
        <AttractionInfoText titleText={titleText} bodyText={bodyText}/>
        </article>
     );
}

export default AttractionInfoCardMirror;