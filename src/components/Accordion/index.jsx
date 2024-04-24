import { useState } from "react";

import "./style.scss";

function Accordion({title, children}) {
    // cet état vérifie si l'accordéon a été étendu auparavant
    // ceci afin de ne pas lancer l'animation de "collapse" au chargement de la page
    const [hasBeenExpanded, setHasBeenExpanded] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    return <div className="accordion">
        <h3>
            <button 
                aria-expanded={isExpanded}
                onClick={() => {
                    if(! hasBeenExpanded) setHasBeenExpanded(true);
                    setIsExpanded(!isExpanded)
                }}
                className={isExpanded && "expanded"}
            >
                <span className="button-content">
                    <span>{title}</span>
                    <span>
                        <img 
                            src="/img/accordion-arrow.svg" 
                            alt="" 
                            className={`arrow ${isExpanded ? "expanded" : ""}`}
                        />
                    </span>
                </span>
            </button>
        </h3>
        <div className={`content ${isExpanded ? "expanded" : hasBeenExpanded ? "collapsed" : ""}`}>
            {children}
        </div>
    </div>;
}

export { Accordion };