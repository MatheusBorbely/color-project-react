import { React, Component } from "react";
import ColorBox from "./ColorBox.js";
import NavBar from "./NavBar.js";
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
                <NavBar level={this.state.level} changeLevel={this.changeLevel}/>
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }
    
}

export default Pallete;