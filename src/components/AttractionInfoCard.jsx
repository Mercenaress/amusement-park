import AttractionImg from "./AttractionImg";
import AttractionInfoText from "./AttractionInfoText";

function AttractionInfoCard({titleText, bodyText, image}) {
    return ( 
        <article>
        <AttractionInfoText titleText={titleText} bodyText={bodyText}/>
        <AttractionImg image={image}/>
        </article>
     );
}

export default AttractionInfoCard;