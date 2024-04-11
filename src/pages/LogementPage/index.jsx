import { useLoaderData } from "react-router-dom";

import { Accordion } from "../../components/Accordion";

import "./style.scss";
import { FiveStars } from "../../components/FiveStars";

function LogementPage() {
    const logement = useLoaderData();

    // lieu mt : 16px
    // tag mt: 18px pour fs(14) tag ou fs(18) lieu

    // useMemo ?
    const [firstName, lastName] = logement.host.name.split(" ");

    return (
        <div className="logement-page">
            <div className="gallery">
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
            </div>
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
                            <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" alt="" />
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