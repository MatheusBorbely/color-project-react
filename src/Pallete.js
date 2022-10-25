import { React, Component } from "react";
import ColorBox from "./ColorBox.js";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Pallete.css";

class Pallete extends Component{
    constructor(props){
        super(props);
        this.state = { level: 500};
        this.changeLevel = this.changeLevel.bind(this)
    }
    changeLevel(level){
        this.setState({level})
    }
    render(){
        const colors = this.props.pallete.colors;
        const colorBoxes = colors[this.state.level].map( c => (
            <ColorBox background={c.hex} name={c.name}/>
        ));
        return(
            <div className="Pallete">
                <div className="slider">
                    <Slider 
                        defaultValue={this.state.level} 
                        min={100} 
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                    />
                </div>
                
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }
    
}

export default Pallete;