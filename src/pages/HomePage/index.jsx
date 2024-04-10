import { useEffect, useState } from "react";

import { Banner } from "../../components/Banner";
import { LogementCard } from "../../components/LogementCard";

import { LOGEMENT_DATA_URL } from "../../AppConfig.js";

import "./style.scss";

function HomePage() {
    const [allLogementData, setAllLogementData] = useState([]);

    useEffect(() => {
        getAllLogementData(LOGEMENT_DATA_URL);

        async function getAllLogementData(dataURL) {
            try {
                const response = await fetch(dataURL);
                if(! response.ok) throw Error(`Échec de récupération des données à cette adresse : ${dataURL}`);
                const data = await response.json();
                setAllLogementData(data);
            } catch(error) {
                console.error(error.message);
            }
        }
    }, []);

    return (
    <div className="home-page">
        <section className="header">
            <Banner backgroundImageURL="img/home-banner.jpg">
                <div class="main-title-wrapper">
                    <div>
                        <h1 class="main-title">
                            <span>Chez vous,&nbsp;</span>
                            <span>partout et ailleurs</span>
                        </h1>
                    </div>
                </div>
            </Banner>
        </section>
        <section className="logement-list">
            {allLogementData.map((logement) => {
                return (
                    <LogementCard 
                        key={logement.id} 
                        coverImageURL={logement.cover} 
                        title={logement.title} 
                        logementID={logement.id} 
                    />
                );
            })}
        </section>
    </div>);
};

export { HomePage };