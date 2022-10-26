import {React,Component} from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";


class PaletteList extends Component{
    render(){
        const names = this.props.palettes.map( c => <Link to={`/palette/${c.id}`}> {c.paletteName} </Link>)
        return(
            <div className="PaletteList">
                <h1>React Colors</h1>
                {names}
               
            </div>
            
        );
    }


}

export default PaletteList;