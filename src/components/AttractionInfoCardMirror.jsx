import AttractionImg from "./AttractionImg";
import AttractionInfoText from "./AttractionInfoText";

function AttractionInfoCardMirror({image, titleText, bodyText}) {
    return ( 
        <article>
        <AttractionImg image={image}/>
        <AttractionInfoText titleText={titleText} bodyText={bodyText}/>
        </article>
     );
}

export default AttractionInfoCardMirror;