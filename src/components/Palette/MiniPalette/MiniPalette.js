import React from "react";
import {    MiniPaletteContainer,
            MiniPaletteColors,
            MiniPaletteWrapper,
            MiniPaletteName,
            MiniPaletteIcon
        } from "./MiniPalette.elements";

function MiniPalette(props){
    const {paletteName, emoji} = props;
    return (
        <MiniPaletteContainer>
            <MiniPaletteColors>

            </MiniPaletteColors>
            <MiniPaletteWrapper>
                <MiniPaletteName>
                    {paletteName}
                </MiniPaletteName>
                <MiniPaletteIcon>
                    {emoji}
                </MiniPaletteIcon>
            </MiniPaletteWrapper>
        </MiniPaletteContainer>
    );
}

export default MiniPalette;