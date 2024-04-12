// TODO : récupérer le code d'erreur ? comment faire ? voir la doc de react router !

import "./style.scss";

function ErrorPage() {
    return (
    <div className="error-page">
        <div className="error-code">
            <img src="/img/404.png" alt="" />
        </div>
    </div>);
};

export { ErrorPage };