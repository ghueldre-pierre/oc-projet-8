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