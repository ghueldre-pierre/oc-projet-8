import { useState } from "react";

import "./style.scss";

function Accordion({title, children}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="accordion">
            <h3 className="header">
                <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={title}
                    id={`${title}-control`}
                    onClick={() => {
                        setIsExpanded(!isExpanded)
                    }}>
                    <span className="button-content">
                        <span>{title}</span>
                        <span>
                            <img 
                                src="/img/accordion-arrow.svg" 
                                alt="" 
                                className="arrow-icon"
                            />
                        </span>
                    </span>
                </button>
            </h3>
            <div
                id={title}
                aria-labelledby={`${title}-control`}
                role="region"
                className={`content ${isExpanded ? "expanded" : ""}`}>
                <div className="client-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export { Accordion };