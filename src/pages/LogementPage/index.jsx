import { useLoaderData } from "react-router-dom";

import { Accordion } from "../../components/Accordion";
import { ImageGallery } from "../../components/ImageGallery";
import { LogementInfo } from "../../components/LogementInfo";

import "./style.scss";

function LogementPage() {
    const logement = useLoaderData();

    return (
        <div className="logement-page">
            <ImageGallery arrayImageURL={logement.pictures} />
            <LogementInfo logementData={logement} />
            <div className="details">
                <Accordion title="Description">
                    <div className="accordion-content">
                        <p className="description-text">{logement["description"]}</p>
                    </div>
                </Accordion>
                <Accordion title="Équipements">
                    <div className="accordion-content">
                        <ul className="item-list">
                            {logement["equipments"].map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                </Accordion>
            </div>
        </div>
    );
}

export { LogementPage };