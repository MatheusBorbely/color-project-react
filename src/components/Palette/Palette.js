import { React, useState } from "react";
import ColorBox from "./ColorBox/ColorBox.js";
import NavBar from "../NavBar/NavBar.js";
import Footer from "../Footer/Footer.js";
import {Palettes,
        PaletteColors,
        } from "./Palette.elements";

function Palette(props){
    const changeLevel = (level) => {
       setLevel(level)
    }
    const changeFormat = (e) => {
        setFormat(e.target.value);
        setChanged(true, setTimeout(() =>  setChanged(false), 3000))  
    }
    const closeSnackerBar = () => {
       setChanged(false)
    }
    const [level,setLevel] = useState(500);
    const [format,setFormat] = useState('hex');
    const [changed,setChanged] = useState(false);
    const {colors, paletteName, emoji} = props.palette;

    const colorBoxes = colors[level].map( c => (
        <ColorBox key={c.id} background={c[format]} name={c.name}/>
    ));

    return(
        <Palettes>
            <NavBar level={level} changeLevel={changeLevel} handleChange={changeFormat} format={format} changed={changed} closeSnackerBar={closeSnackerBar}/>
            <PaletteColors>
                {colorBoxes}
            </PaletteColors>
            <Footer name={paletteName} emoji={emoji}/>
        </Palettes>
    );
}
export default Palette;