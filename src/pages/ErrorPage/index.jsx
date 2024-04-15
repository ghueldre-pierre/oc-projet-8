import { Link, useRouteError } from "react-router-dom";

import "./style.scss";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
    <div className="error-page">
        <div className="error-code">
            <img src="/img/404.png" alt="" />
        </div>
        <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
        <p className="go-home">
            <Link to={"/"}>Retourner sur la page d'accueil</Link>
        </p>
    </div>);
};

export { ErrorPage };