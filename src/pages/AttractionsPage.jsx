import DropMenu from "../components/DropMenu";
import AttractionInfoCard from "../components/AttractionInfoCard";
import AttractionInfoCardMirror from "../components/AttractionInfoCardMirror"
import style from "./AttractionsPage.module.scss"

function AttractionsPage() {
    return ( 
        <>
        <DropMenu/>
        <h1 className={style.pageTitle}>Attractions</h1>
        <section className={style.infoCardWrapper}>
            <AttractionInfoCard 
            image={'https://cdn.discordapp.com/attachments/453688427133796355/1146038363506356275/image.png?ex=654a1a66&is=6537a566&hm=200e1b166c296eefa24e4882d4d59f42a9ce6cfc2e79437c4fccb66a813b1e68&'} 
            titleText={'PeePeePoo'}
            bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non nunc odio. Nulla auctor quis sapien eu tincidunt. Phasellus tincidunt ligula et accumsan elementum. Aliquam erat volutpat.'}
            />
            <AttractionInfoCardMirror
            image={'https://cdn.discordapp.com/attachments/453688427133796355/1146038363506356275/image.png?ex=654a1a66&is=6537a566&hm=200e1b166c296eefa24e4882d4d59f42a9ce6cfc2e79437c4fccb66a813b1e68&'} 
            titleText={'PeePeePoo'}
            bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non nunc odio. Nulla auctor quis sapien eu tincidunt. Phasellus tincidunt ligula et accumsan elementum. Aliquam erat volutpat.'}
            />
            <AttractionInfoCard
            image={'https://cdn.discordapp.com/attachments/453688427133796355/1146038363506356275/image.png?ex=654a1a66&is=6537a566&hm=200e1b166c296eefa24e4882d4d59f42a9ce6cfc2e79437c4fccb66a813b1e68&'} 
            titleText={'PeePeePoo'}
            bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non nunc odio. Nulla auctor quis sapien eu tincidunt. Phasellus tincidunt ligula et accumsan elementum. Aliquam erat volutpat.'}
            />
            <AttractionInfoCardMirror
            image={'https://cdn.discordapp.com/attachments/453688427133796355/1146038363506356275/image.png?ex=654a1a66&is=6537a566&hm=200e1b166c296eefa24e4882d4d59f42a9ce6cfc2e79437c4fccb66a813b1e68&'} 
            titleText={'PeePeePoo'}
            bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non nunc odio. Nulla auctor quis sapien eu tincidunt. Phasellus tincidunt ligula et accumsan elementum. Aliquam erat volutpat.'}
            />
        </section>
        </>
     );
}

export default AttractionsPage;