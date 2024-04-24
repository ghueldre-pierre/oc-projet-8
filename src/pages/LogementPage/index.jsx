import { useLoaderData } from "react-router-dom";

import { Accordion } from "../../components/Accordion";
import { ImageGallery } from "../../components/ImageGallery";
import { LogementInfo } from "../../components/LogementInfo";

import { LOGEMENT_DATA_URL } from "../../AppConfig.js";

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

async function logementDataLoader({params}) {
    const { logementID } = params;

    try {
        const res = await fetch(LOGEMENT_DATA_URL);
        if(! res.ok) throw Error("Échec lors de la récupération des données à distance");
        const allLogementData = await res.json();
        const logementData = allLogementData.find((logement) => {
            return logement["id"] === logementID;
        });
        if(! logementData) throw new Response("Not Found", { status: 404 });
        return logementData;

    } catch(error) {
        console.error(error);
    }
}

export { LogementPage, logementDataLoader };