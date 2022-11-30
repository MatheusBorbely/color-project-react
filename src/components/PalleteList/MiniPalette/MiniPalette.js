import React from "react";
import {    MiniPaletteContainer,
            MiniPaletteColors,
            MiniPaletteWrapper,
            MiniPaletteName,
            MiniPaletteIcon,
            MiniPaletteColorsBox
        } from "./MiniPalette.elements";

function MiniPalette(props){
    const {paletteName, emoji, colors, goToPalette, id} = props;
    const miniColors = colors.map( (c) => <MiniPaletteColors background={c.color}/>)
    const handleClick = () => {
        goToPalette(id);
    }
    return (
        <MiniPaletteContainer onClick={handleClick}>
            <MiniPaletteColorsBox>
                {miniColors}
            </MiniPaletteColorsBox>
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