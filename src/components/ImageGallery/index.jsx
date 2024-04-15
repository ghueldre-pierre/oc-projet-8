import { useState } from "react";
import "./style.scss";

function ImageGallery({imagePathArray}) {
    const [currentImageID, setCurrentImageID] = useState(0);
    const maxImageID = imagePathArray.length - 1;

    function onPreviousClick() {
        setCurrentImageID(currentImageID > 0 ? currentImageID - 1 : maxImageID);
    }

    function onNextClick() {
        setCurrentImageID((currentImageID === maxImageID)  ? 0 : currentImageID + 1);
    }

    return (
        <div className="image-gallery">
            {(maxImageID > 1) && (
                <button 
                    className="button previous"
                    onClick={onPreviousClick}
                >
                    <svg><use href="#left-arrow"></use></svg>
                </button>
            )}
            <img src={imagePathArray[currentImageID]} alt="" />
            <p className="counter">{`${currentImageID + 1}/${maxImageID + 1}`}</p>
            {(maxImageID > 1) && (
                <button 
                    className="button next"
                    onClick={onNextClick}
                >
                    <svg><use href="#left-arrow"></use></svg>
                </button>
            )}
            {(maxImageID > 1) && (
                <svg width={0} height={0}>
                    <symbol id="left-arrow" viewBox="0 0 13 21">
                        <path d="M12.51 2.75064L10.74 0.98064L0.83995 10.8806L10.7399 20.7806L12.5099 19.0106L4.37995 10.8806L12.51 2.75064Z" fill="white"/>
                    </symbol>
                </svg>
            )}
        </div>
    );
}

export { ImageGallery };