import { useLoaderData } from "react-router-dom";

import { Accordion } from "../../components/Accordion";

import "./style.scss";
import { FiveStars } from "../../components/FiveStars";
import { useEffect, useRef, useState } from "react";

function ImageGallery({imagePathArray}) {
    const [currentImageID, setCurrentImageID] = useState(0);

    const maxImageID = imagePathArray.length - 1;

    console.log(maxImageID);

    function onPreviousClick() {
        setCurrentImageID(currentImageID > 0 ? currentImageID - 1 : maxImageID);
    }

    function onNextClick() {
        setCurrentImageID((currentImageID === maxImageID)  ? 0 : currentImageID + 1);
    }

    /*
    useEffect(() => {
        let currentImageID = 0;

        gallery.current.addEventListener("click", function(event) {
            const button = event.target.closest("button");
            if(! button) return;
            console.log(event.target);
            if(button.classList.contains("previous")) {
                currentImageID -= 1;
                if(currentImageID < 0) currentImageID = imageSrcList.length - 1;
            } else {
                currentImageID += 1;
                if(currentImageID === imageSrcList.length) currentImageID = 0;
            }
            imageElement.current.setAttribute("src", imageSrcList[currentImageID]);
        });

        imageElement.current.setAttribute("src", imageSrcList[currentImageID]);
    }, []);
    */

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

function LogementPage() {
    const logement = useLoaderData();

    // lieu mt : 16px
    // tag mt: 18px pour fs(14) tag ou fs(18) lieu

    // useMemo ?
    const [firstName, lastName] = logement.host.name.split(" ");

    const gallery = useRef(null);
    const imageElement = useRef(null);
    /*
    const previousButton = useRef(null);
    const nextButton = useRef(null);
    */

    return (
        <div className="logement-page">
            {/*<div className="gallery" ref={gallery}>
                <button className="button previous">
                    <svg>
                        <use href="#left-arrow"></use>
                    </svg>
                </button>
                <img src="" alt="" ref={imageElement} />
                <button className="button next">
                    <svg>
                        <use href="#left-arrow"></use>
                    </svg>
                </button>
                <svg width={0} height={0}>
                    <symbol id="left-arrow" viewBox="0 0 13 21">
                        <path d="M12.51 2.75064L10.74 0.98064L0.83995 10.8806L10.7399 20.7806L12.5099 19.0106L4.37995 10.8806L12.51 2.75064Z" fill="white"/>
                    </symbol>
                </svg>
            </div>*/}
            <ImageGallery imagePathArray={logement.pictures}/>
            <div className="info">
                <div className="left">
                    <h1 className="title">{logement.title}</h1>
                    <p className="location">{logement.location}</p>
                    <ul className="tags">
                        {logement["tags"].map((tag, index) => {
                            return <li className="tag" key={index}>{tag}</li>;
                        })}
                    </ul>
                </div>
                <div className="right">
                    <div className="profil">
                        <p className="names">
                            <span>{firstName}</span>
                            <span>&nbsp;{lastName}</span>
                        </p>
                        <div className="portrait">
                            <img src={logement.host.picture} alt="" />
                        </div>
                    </div>
                    <div className="rating">
                        <FiveStars rating={logement.rating}/>
                    </div>
                </div>
            </div>
            <div className="details">
                <Accordion title="Description">
                    <p className="description">{logement["description"]}</p>
                </Accordion>
                <Accordion title="Équipements">
                    <ul className="item-list">
                        {logement["equipments"].map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </Accordion>
            </div>
        </div>
    );
}

export { LogementPage };