import { React, Component } from "react";
import ColorBox from "./ColorBox.js";
import NavBar from "./NavBar.js";
import "./Palette.css";

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = { level: 500, format: 'hex', changed: false};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
        this.closeSnackerBar = this.closeSnackerBar.bind(this)
    }
    changeLevel(level){
        this.setState({level})
    }
    changeFormat(e){
        this.setState({
            format: e.target.value,
            changed: true
        }, () => {
            setTimeout(() =>  this.setState({changed:false}), 3000)
        })
        
    }
    closeSnackerBar(){
        this.setState({changed:false})
    }
    render(){
        const {colors, id, paletteName, emoji} = this.props.palette;
        const format = this.state.format;
        const colorBoxes = colors[this.state.level].map( c => (
            <ColorBox key={id} background={c[format]} name={c.name}/>
        ));
        return(
            <div className="Palette">
                <NavBar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat} format={this.state.format} changed={this.state.changed} closeSnackerBar={this.closeSnackerBar}/>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer>
                    <div class="container-footer">
                        <span className="Palette-title">{paletteName}</span>
                        <i className="icon-title">{emoji}</i>
                    </div>
                </footer>
            </div>
        );
    }
    
}

export default Palette;