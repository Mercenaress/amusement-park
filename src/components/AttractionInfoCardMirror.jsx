import AttractionImg from "./AttractionImg";
import AttractionInfoText from "./AttractionInfoText";

function AttractionInfoCardMirror({image, titleText, bodyText}) {
    return ( 
        <>
        <AttractionImg image={image}/>
        <AttractionInfoText titleText={titleText} bodyText={bodyText}/>
        </>
     );
}

export default AttractionInfoCardMirror;