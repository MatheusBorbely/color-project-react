import { React, Component } from "react";
import seedColors from "./seedColors";
import Pallete from "./Pallete";
import {generatePalette} from "./colorHelpers";


class App extends Component {
  render(){
    return (
      <div className="App">
        <Pallete pallete={generatePalette(seedColors[4])} />
      </div>
    );
  }
  
}

export default App;
