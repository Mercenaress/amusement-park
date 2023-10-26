import style from "./AttractionImg.module.scss"

function AttractionImg({image}) {
    return ( 
        <>
        <section className={style.imgCard}>
            <div className={style.imgBackdrop}></div>
            <div className={style.imageContainer}>
                <img src={image} alt="" />
            </div>
        </section>
        </>
     );
}

export default AttractionImg;