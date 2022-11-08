import {React, useState} from "react";
import { SingleColorContainer } from "./SingleColor.elements";

function SingleColor(props) {
    const {palette, colorId} = props;
    const getShades = (palette, colorId) => {
        let shades = [];
        let paletteColors = palette.colors;
        
        for(let key in paletteColors){
            shades = shades.concat(
                paletteColors[key].filter(c => c.id === colorId)
            )
        }
        return shades.slice(1);
    }
    let {palettes, setPalettes} = useState(getShades(palette,colorId));
    return (
        <SingleColorContainer>
           
        </SingleColorContainer>
    );
    
}

export default SingleColor;