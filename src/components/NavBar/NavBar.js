import React from "react";

//Style
import { Nav,
        NavbarContainer,
        NavSlider,
        NavLogo,
        NavbarLevel,
        SliderComponent,
        NavSelect,
        NavLevelCurrent } from "./NavBar.elements";

//Dependencias axiliares
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Snackbar } from "@mui/material";
import {Button} from "@mui/material";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

function NavBar(props){
    const {level, changeLevel, handleChange, format, changed, closeSnackerBar, showLevel} = props;
    return(
        <Nav>
            <NavbarContainer>
                <NavbarLevel>
                    <NavLogo>
                        <Link to="/">BorbelyApp</Link>
                    </NavLogo>
                    {showLevel && 
                        <NavSlider>
                            <NavLevelCurrent>Level: {level}</NavLevelCurrent>
                            <SliderComponent>
                                <Slider 
                                    defaultValue={level} 
                                    min={100} 
                                    max={900}
                                    step={100}
                                    onAfterChange={changeLevel}
                                />
                            </SliderComponent>
                        </NavSlider>
                    }
                </NavbarLevel>
                <NavSelect>
                    <Select value={format} onChange={handleChange}>
                        <MenuItem value="hex">HEX - #FFFFF</MenuItem>
                        <MenuItem value="rgb">RGB- rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA- rgba(255,255,255, 1.0)</MenuItem>
                    </Select>
                </NavSelect>
            </NavbarContainer>  
            <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                open={changed} 
                message={`Formato mudado para ${format}`} 
                autoHideDuration={6000}
                action={[
                    <Button onClick={closeSnackerBar} color="inherit" size="small">
                        X
                    </Button>
            ]}/>
        </Nav>
    ); 
}
export default NavBar;