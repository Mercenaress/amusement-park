import MenuButton from "../components/MenuButton";
import AttractionInfoCard from "../components/AttractionInfoCard";
import AttractionInfoCardMirror from "../components/AttractionInfoCardMirror"

function AttractionsPage() {
    return ( 
        <>
        <MenuButton/>
        <h1>Attractions</h1>
        <AttractionInfoCard 
        image={'https://cdn.discordapp.com/attachments/453688427133796355/1146038363506356275/image.png?ex=654a1a66&is=6537a566&hm=200e1b166c296eefa24e4882d4d59f42a9ce6cfc2e79437c4fccb66a813b1e68&'} 
        titleText={'PeePeePoo'}
        bodyText={'lorem ipsum dawdwljlwajfgwalÖJFwalkHGJWHGkjahgKhgwkaHGJwhaKGHwkja'}
        />
        <AttractionInfoCardMirror
        image={'https://cdn.discordapp.com/attachments/453688427133796355/1146038363506356275/image.png?ex=654a1a66&is=6537a566&hm=200e1b166c296eefa24e4882d4d59f42a9ce6cfc2e79437c4fccb66a813b1e68&'} 
        titleText={'PeePeePoo'}
        bodyText={'lorem ipsum dawdwljlwajfgwalÖJFwalkHGJWHGkjahgKhgwkaHGJwhaKGHwkja'}
        />
        <AttractionInfoCard
        image={'https://cdn.discordapp.com/attachments/453688427133796355/1146038363506356275/image.png?ex=654a1a66&is=6537a566&hm=200e1b166c296eefa24e4882d4d59f42a9ce6cfc2e79437c4fccb66a813b1e68&'} 
        titleText={'PeePeePoo'}
        bodyText={'lorem ipsum dawdwljlwajfgwalÖJFwalkHGJWHGkjahgKhgwkaHGJwhaKGHwkja'}
        />
        <AttractionInfoCardMirror
        image={'https://cdn.discordapp.com/attachments/453688427133796355/1146038363506356275/image.png?ex=654a1a66&is=6537a566&hm=200e1b166c296eefa24e4882d4d59f42a9ce6cfc2e79437c4fccb66a813b1e68&'} 
        titleText={'PeePeePoo'}
        bodyText={'lorem ipsum dawdwljlwajfgwalÖJFwalkHGJWHGkjahgKhgwkaHGJwhaKGHwkja'}
        />
        </>
     );
}

export default AttractionsPage;