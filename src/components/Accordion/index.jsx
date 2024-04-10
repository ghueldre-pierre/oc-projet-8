import { useEffect, useRef, useState } from "react";

import "./style.scss";

function Accordion({title, children}) {
    const contentContainer = useRef(null);
    const arrow = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if(isExpanded) {
            contentContainer.current.classList.add("expanded");
            arrow.current.classList.add("expanded");
        } else {
            contentContainer.current.classList.remove("expanded");
            arrow.current.classList.remove("expanded");
        }
    }, [isExpanded]);

    return <div className="accordion">
        <h3>
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
            >
                <span className="button-content">
                    <span>{title}</span>
                    <span>
                        <img src="./accordion-arrow.svg" alt="" className="arrow" ref={arrow}/>
                    </span>
                </span>
            </button>
        </h3>
        <div className="content" ref={contentContainer}>
            {children}
        </div>
    </div>;
}

export { Accordion };