import { React, Component } from "react";
import ColorBox from "./ColorBox.js";
import "./Pallete.css"

class Pallete extends Component{

    render(){
        const colorBoxes = this.props.colors.map( c => (
            <ColorBox background={c.color} name={c.name}/>
        ));
        return(
            <div className="Pallete">
                <div className="Pallete-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }
    
}

export default Pallete;