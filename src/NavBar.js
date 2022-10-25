import { React, Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";

class NavBar extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const {level, changeLevel} = this.props;
        return(
            <header className="NavBar">
                <div className="NavBar-container">
                    <div className="level-container">
                        <div className="logo">
                            <a href="#">BorbelyApp</a>
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

                    </div>
                </div>   
            </header>
        );
    }
    
}

export default NavBar;