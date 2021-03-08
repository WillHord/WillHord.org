import React from 'react';

import "./ProjectBox.css";

const LanguageFooter = (props) => {

    return (<div 
    className="FooterBox"
    onClick={() => props.sortBy(props.language)}
    >
        <span className="language">{props.language}</span>
    </div>
    )
}

export default LanguageFooter;