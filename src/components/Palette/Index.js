import {React} from "react";
import MiniPalette from "./MiniPalette/MiniPalette"


function PaletteList (props){
    console.log(props)
    const palettes = props.palettes.map(palette => (<MiniPalette palette={palette} />))
    return(
        <div className="PaletteList">
            {palettes}
        </div>
        
    );
}

export default PaletteList;