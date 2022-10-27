import { React, useState } from "react";

import {CopyToClipboard} from "react-copy-to-clipboard"

import { ColorBoxBtn,ColorBoxBtnWrapper,
         ColorBoxContainer,ColorBoxInfoWrapper,
         ColorBoxInfoName,ColorBoxInfoMore,
         ColorBoxOverlay,ColorBoxMgsWrapper,
         ColorBoxMgsTitle,ColorBoxMgsSubtitle } from "./ColorBox.elements";


function ColorBox(props){

    const [isOverlay,setIsOverley] = useState(false);
    const {background, name} = props;

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
                        <ColorBoxMgsTitle>COPIED!</ColorBoxMgsTitle>
                        <ColorBoxMgsSubtitle>{background}</ColorBoxMgsSubtitle>
                </ColorBoxMgsWrapper>

                <ColorBoxBtnWrapper>
                    <ColorBoxBtn>
                        COPY
                    </ColorBoxBtn>      
                </ColorBoxBtnWrapper>

                <ColorBoxInfoWrapper>
                    <ColorBoxInfoName>
                        {name}
                    </ColorBoxInfoName>
                    <ColorBoxInfoMore>
                        MORE
                    </ColorBoxInfoMore>
                </ColorBoxInfoWrapper>

            </ColorBoxContainer>

        </CopyToClipboard>
    );  
}
export default ColorBox;