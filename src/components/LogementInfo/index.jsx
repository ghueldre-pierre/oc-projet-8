import { FiveStars } from "../FiveStars";

import "./style.scss";

function LogementInfo({logementData}) {
    const [firstName, lastName] = logementData.host.name.split(" ");

    return (
        <div className="logement-info">
            <div className="left">
                <h1 className="title">{logementData.title}</h1>
                <p className="location">{logementData.location}</p>
                <ul className="tags">
                    {logementData["tags"].map((tag, index) => {
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
                        <img src={logementData.host.picture} alt="" />
                    </div>
                </div>
                <div className="rating">
                    <FiveStars rating={logementData.rating}/>
                </div>
            </div>
        </div>
    );
}

export { LogementInfo };