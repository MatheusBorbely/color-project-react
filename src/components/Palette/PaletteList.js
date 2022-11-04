import {React} from "react";
import MiniPalette from "./MiniPalette/MiniPalette"
import { PaletteListContainer,
         PaletteListNav, 
         PaletteListPalettes, 
         PaletteListTitle, 
         PaletteListWrapper } from "./PaletteList.elements";
import { useNavigate } from "react-router";

function PaletteList (props){
    const navigate = useNavigate();
    const goToPallete = (id) => {
        navigate(`/palette/${id}`)
    }
    const palettes = props.palettes.map(palette => (<MiniPalette key={palette.id} goToPalette={goToPallete} {...palette} />))
    return(
        <PaletteListContainer>
            <PaletteListWrapper>
                <PaletteListNav>
                    <PaletteListTitle>React Color</PaletteListTitle>
                </PaletteListNav>
                    <PaletteListPalettes>
                        {palettes}
                    </PaletteListPalettes>
            </PaletteListWrapper>
        </PaletteListContainer>
        
    );
}

export default PaletteList;