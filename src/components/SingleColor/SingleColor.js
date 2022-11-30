import {React, useState} from "react";
import { SingleColorContainer, SingleColorBoxes, SingleColorGoBack, SingleColorGoBackBtn } from "./SingleColor.elements";
import ColorBox from "../Palette/ColorBox/ColorBox.js";
import PaletteNavBar from "../NavBar/PaletteNavBar/PaletteNavBar.js";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";


function SingleColor(props) {

    const {palette, colorId} = props;

    const getShades = (palette, colorId) => {
        let allShades = [];
        let paletteColors = palette.colors;
        
        for(let key in paletteColors){
            allShades = allShades.concat(
                paletteColors[key].filter(c => c.id === colorId)
            )
        }
        return allShades.slice(1);
    }
     const changeFormat = (e) => {
         setFormat(e.target.value);
         setChanged(true, setTimeout(() =>  setChanged(false), 3000))  
     }
     const closeSnackerBar = () => {
        setChanged(false)
     }

    const [format,setFormat] = useState('hex');
    const [changed,setChanged] = useState(false);
    const [shades,] = useState(getShades(palette,colorId));

    const colorBoxes = shades.map( c => (
        <ColorBox key={c.name} background={c[format]} name={c.name} showLink={false} />
    ))
    return (
        <>
            <SingleColorContainer>
                <PaletteNavBar handleChange={changeFormat} format={format} changed={changed} closeSnackerBar={closeSnackerBar} showLevel={false} />
                <SingleColorBoxes>
                    {colorBoxes}
                    <SingleColorGoBack>
                        <Link to={`/palette/${palette.id}`}>
                            <SingleColorGoBackBtn>Go Back</SingleColorGoBackBtn>
                        </Link>
                    </SingleColorGoBack>
                </SingleColorBoxes>
                <Footer name={palette.paletteName} emoji={palette.emoji}/>
            </SingleColorContainer>
        </>
    );
}
export default SingleColor;