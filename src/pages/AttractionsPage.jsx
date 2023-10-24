import MenuButton from "../components/MenuButton";
import AttractionInfoCard from "../components/AttractionInfoCard";
import AttractionInfoCardMirror from "../components/AttractionInfoCardMirror"

function AttractionsPage() {
    return ( 
        <>
        <MenuButton/>
        <h1>Attractions</h1>
        <AttractionInfoCard/>
        <AttractionInfoCardMirror/>
        <AttractionInfoCard/>
        <AttractionInfoCardMirror/>
        </>
     );
}

export default AttractionsPage;