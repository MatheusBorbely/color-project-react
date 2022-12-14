import { React, useState } from "react";

import {CopyToClipboard} from "react-copy-to-clipboard"

import { ColorBoxBtn,ColorBoxBtnWrapper,
         ColorBoxContainer,ColorBoxInfoWrapper,
         ColorBoxInfoName,ColorBoxInfoMore,
         ColorBoxOverlay,ColorBoxMgsWrapper,
         ColorBoxMgsTitle,ColorBoxMgsSubtitle } from "./ColorBox.elements";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

function ColorBox(props){

    const [isOverlay,setIsOverley] = useState(false);
    const {background, name, moreUrl, showLink} = props;
    const contrast = chroma.contrast(background, "black") < 6;

    const changeOverlayState = () => {
        setIsOverley(!isOverlay, 
            setTimeout(() => setIsOverley(false), 1500)
        );
    }
    return(
        <CopyToClipboard text={background} onCopy={changeOverlayState}>
        
            <ColorBoxContainer background={background}>

                <ColorBoxOverlay background={background} overlay={isOverlay}></ColorBoxOverlay>

                <ColorBoxMgsWrapper overlay={isOverlay}>
                        <ColorBoxMgsTitle color={contrast}>COPIED!</ColorBoxMgsTitle>
                        <ColorBoxMgsSubtitle color={contrast}>{background}</ColorBoxMgsSubtitle>
                </ColorBoxMgsWrapper>

                <ColorBoxBtnWrapper>
                    <ColorBoxBtn color={contrast}>
                        COPY
                    </ColorBoxBtn>      
                </ColorBoxBtnWrapper>

                <ColorBoxInfoWrapper>
                    <ColorBoxInfoName color={contrast}>
                        {name}
                    </ColorBoxInfoName>
                    <ColorBoxInfoMore color={contrast}>
                        {showLink && 
                            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>        
                                    MORE
                            </Link>
                        }
                    </ColorBoxInfoMore>
                </ColorBoxInfoWrapper>

            </ColorBoxContainer>

        </CopyToClipboard>
    );  
}
export default ColorBox;