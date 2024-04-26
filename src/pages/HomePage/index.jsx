import { useEffect, useState } from "react";

import { Banner } from "../../components/Banner";
import { LogementCard } from "../../components/LogementCard";

import { tryGetAllLogementData } from "../../logementApi.js";

import "./style.scss";

function HomePage() {
    const [allLogementData, setAllLogementData] = useState([]);

    useEffect(() => {
        tryGetAllLogementData()
        .then(data => {
            setAllLogementData(data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
    <div className="home-page">
        <section className="header">
            <Banner backgroundImageURL="img/home-banner.jpg">
                <div className="main-title-wrapper">
                    <div>
                        <h1 className="main-title">
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