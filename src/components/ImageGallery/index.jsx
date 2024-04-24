import { useState } from "react";
import "./style.scss";

function ImageGallery({ arrayImageURL }) {
    const [currentImageID, setCurrentImageID] = useState(0);
    const isSingleImage = (arrayImageURL.length === 1);

    function onPreviousClick() {
        setCurrentImageID(currentImageID > 0 ? currentImageID - 1 : isSingleImage);
    }

    function onNextClick() {
        setCurrentImageID((currentImageID === isSingleImage)  ? 0 : currentImageID + 1);
    }

    return (
        <div className="image-gallery">
            <img src={arrayImageURL[currentImageID]} alt="" />
            {/* 
                Le seul élément positionné de manière statique est l'image (ci-dessus).
                Tous les éléments de l'interface (ci-dessous) sont positionnés de manière absolue 
                la manière dont on les ordonne n'a donc pas vraiment d'importance, c'est pourquoi 
                je peux me permettre de les organiser un peu comme je veux.
            */}
            {(isSingleImage) && (
                <>
                    <button className="button previous" onClick={onPreviousClick}>
                        <svg><use href="#left-arrow"></use></svg>
                    </button>
                    <p className="counter">{`${currentImageID + 1}/${isSingleImage + 1}`}</p>
                    <button className="button next" onClick={onNextClick}>
                        <svg><use href="#left-arrow"></use></svg>
                    </button>
                    <svg width={0} height={0}>
                        <symbol id="left-arrow" viewBox="0 0 13 21">
                            <path d="M12.51 2.75064L10.74 0.98064L0.83995 10.8806L10.7399 20.7806L12.5099 19.0106L4.37995 10.8806L12.51 2.75064Z" fill="white"/>
                        </symbol>
                    </svg>
                </>
            )}
        </div>
    );
}

export { ImageGallery };