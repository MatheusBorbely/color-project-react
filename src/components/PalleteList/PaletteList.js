import {React} from "react";
import MiniPalette from "./MiniPalette/MiniPalette"
import { PaletteListContainer,
         PaletteListNav, 
         PaletteListPalettes, 
         PaletteListTitle, 
         PaletteListWrapper,
         PaletteListNew } from "./PaletteList.elements";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


function PaletteList (props){
    const{palettes, removePalette } = props;
    const navigate = useNavigate();
    const goToPallete = (id) => {
        navigate(`/palette/${id}`)
    }
    const miniPalettes = palettes.map(palette => (<MiniPalette key={palette.id} removePalette={removePalette} goToPalette={goToPallete} {...palette} />))
    return(
        <PaletteListContainer>
            <PaletteListWrapper>
                <PaletteListNav>
                    <PaletteListTitle>React Color</PaletteListTitle>
                    <PaletteListNew>
                        <Link to="/palette/new">
                            Criar nova paleta
                        </Link>
                    </PaletteListNew>
                </PaletteListNav>
                    <PaletteListPalettes>
                        {miniPalettes} 
                    </PaletteListPalettes>
            </PaletteListWrapper>
        </PaletteListContainer>
        
    );
}

export default PaletteList;