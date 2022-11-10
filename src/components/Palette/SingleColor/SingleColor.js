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
    const {shades, setShades} = useState(getShades(palette,colorId));
    const colorBoxes = shades.map( c => {
        <ColorBox key={c.id} background={c.hex} name={c.name}/>
    })
    return (
        <SingleColorContainer>
           
        </SingleColorContainer>
    );
    
}

export default SingleColor;