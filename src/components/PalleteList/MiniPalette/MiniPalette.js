import React from "react";
import {    MiniPaletteContainer,
            MiniPaletteColors,
            MiniPaletteWrapper,
            MiniPaletteName,
            MiniPaletteIcon,
            MiniPaletteColorsBox,
            Delete
        } from "./MiniPalette.elements";


function MiniPalette(props){
    const {paletteName, emoji, colors, goToPalette, id, removePalette} = props;
    const miniColors = colors.map( (c) => <MiniPaletteColors background={c.color}/>)
    const handleClick = () => {
        goToPalette(id);
    }
    const deletePalette = (e) => {
        e.stopPropagation();
        removePalette(id);
    }
    return (
        <MiniPaletteContainer onClick={handleClick}>
            <Delete onClick={deletePalette}/>
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