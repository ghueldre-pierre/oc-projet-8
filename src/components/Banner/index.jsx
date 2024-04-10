import "./style.scss";

function Banner({backgroundImageURL, children}) {
    return (
        <div className="banner">
            <img src={backgroundImageURL} alt="" />
            <div className="overlay"></div>
            <div className="children">{children}</div>
        </div>
    );
}

export { Banner };