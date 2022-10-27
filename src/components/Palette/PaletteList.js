import {React,Component} from "react";
import { Link } from "react-router-dom";


class PaletteList extends Component{
    render(){
        const names = this.props.palettes.map( c => <Link to={`/palette/${c.id}`}> {c.paletteName} </Link>)
        return(
            <div className="PaletteList">
                {names}
               
            </div>
            
        );
    }


}

export default PaletteList;