import { Accordion } from "../../components/Accordion";
import { Banner } from "../../components/Banner";

import "./style.scss";

function AboutPage() {
    return (
    <div className="about-page">
        <section className="header">
            <Banner backgroundImageURL="img/about-banner.jpg"></Banner>
        </section>
        <section className="about-list">
            <Accordion title="Fiabilité">
                <div className="accordion-content">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </div>
            </Accordion>
            <Accordion title="Respect">
                <div className="accordion-content">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
            </Accordion>
            <Accordion title="Service">
                <div className="accordion-content">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
            </Accordion>
            <Accordion title="Sécurité">
                <div className="accordion-content">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            </Accordion>

        </section>
    </div>);
}

export { AboutPage }