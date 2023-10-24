import AttractionImg from "./AttractionImg";
import AttractionInfoText from "./AttractionInfoText";

function AttractionInfoCard({titleText, bodyText, image}) {
    return ( 
        <>
        <AttractionInfoText titleText={titleText} bodyText={bodyText}/>
        <AttractionImg image={image}/>
        </>
     );
}

export default AttractionInfoCard;