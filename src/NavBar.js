import { React, Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";
import { Link } from "react-router-dom";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Snackbar } from "@mui/material";
import {Button} from "@mui/material";


class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {changed: false}
    }

    render(){
        const {level, changeLevel, handleChange, format, changed, closeSnackerBar} = this.props;
        return(
            <header className="NavBar">
                <div className="NavBar-container">
                    <div className="level-container">
                        <div className="logo">
                            <Link to="/">BorbelyApp</Link>
                        </div>
                        <div className="slider-container">
                            <span>Level: {level}</span>
                            <div className="slider">
                                <Slider 
                                    defaultValue={level} 
                                    min={100} 
                                    max={900}
                                    step={100}
                                    onAfterChange={changeLevel}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="changeColor-container">
                        <Select value={format} onChange={handleChange}>

                            <MenuItem value="hex">HEX - #FFFFF</MenuItem>
                            <MenuItem value="rgb">RGB- rgb(255,255,255)</MenuItem>
                            <MenuItem value="rgba">RGBA- rgba(255,255,255, 1.0)</MenuItem>

                        </Select>
                    </div>
                </div>   
                <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                    open={changed} 
                    message={`Formato mudado para ${format}`} 
                    autoHideDuration={6000}
                    action={[
                        <Button onClick={closeSnackerBar} color="inherit" size="small">
                            X
                        </Button>
                    ]}
                    />
            </header>
        );
    }
    
}

export default NavBar;