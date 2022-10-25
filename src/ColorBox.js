import { React, Component } from "react";
import {CopyToClipboard} from "react-copy-to-clipboard"
import "./ColorBox.css";

class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state = { overlay: false}
        this.changeOverlayState = this.changeOverlayState.bind(this)
    }

    changeOverlayState() {
        this.setState({overlay:true}, () => {
            setTimeout(() =>  this.setState({overlay:false}), 1500)
        })
    }
    render(){
        const {background, name} = this.props;
        const copied = this.state.overlay;
        return(
            <CopyToClipboard text={background} onCopy={this.changeOverlayState}>
                <div className="ColorBox" style={{background}}>

                    <div style={{background}} className={`copy-overlay ${ copied && "show"}`}></div>
                    <div className={`copy-msg ${ copied && "show"}`}>
                       
                            <h1 >COPIED!</h1>
                            <h4>{background}</h4>
                      
                    </div>
                    <div className="copy-button">
                        <button className="copy">
                            COPY
                        </button>      
                    </div>
                    <div className="container-box">
                        <div className="name-color">
                            {name}
                        </div>
                        <span className="see-more">
                            MORE
                        </span>
                    </div>
                </div>
            </CopyToClipboard>
        );
    }
    
}
export default ColorBox;