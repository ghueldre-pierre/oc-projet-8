import { useState } from "react";

import "./style.scss";

function Accordion({title, children}) {
    const [isActivated, setIsActivated] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    return <div className="accordion">
        <h3>
            <button 
                aria-expanded={isExpanded}
                onClick={() => {
                    if(! isActivated) setIsActivated(true);
                    setIsExpanded(!isExpanded)
                }}
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
        <div className={`content ${isExpanded ? "expanded" : isActivated ? "collapsed" : ""}`}>
            {children}
        </div>
    </div>;
}

export { Accordion };