import "./style.scss";

function LogementCard({coverImageURL, title, logementID}) {
    return <a className="logement-card" href={`/logement/${logementID}`}>
        <img src={coverImageURL} alt="" />
        <div className="overlay"></div>
        <p className="title">{title}</p>
    </a>
}

export { LogementCard };