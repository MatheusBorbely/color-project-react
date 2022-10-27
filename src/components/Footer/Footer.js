import React from "react";
import {FooterContainer} from "./Footer.elements";

function Footer(props) {
    const {name, emoji} = props;
    return (
        <FooterContainer>
            <span>{name}</span>
            <i>{emoji}</i>
        </FooterContainer>
    );
    
}

export default Footer;