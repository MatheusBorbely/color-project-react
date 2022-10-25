import { React, Component } from "react";
import {CopyToClipboard} from "react-copy-to-clipboard"
import "./ColorBox.css";

class ColorBox extends Component{

    render(){
        const {background, name} = this.props;
        return(
            <CopyToClipboard text={background}>
                <div className="ColorBox" style={{background}}>
                    <div className="copy-button">
                        <button className="copy">
                            COPY
                        </button>      
                    </div>
                    <div className="container-box">
                        <div className="name-color">
                            {name}
                        </div>
                        <div className="see-more">
                            MORE
                        </div>
                    </div>
                </div>
            </CopyToClipboard>
        );
    }
    
}
export default ColorBox;