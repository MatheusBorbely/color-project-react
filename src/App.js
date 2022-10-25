import { React, Component } from "react";
import seedColors from "./seedColors";
import Pallete from "./Pallete";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Pallete {...seedColors[4]} />
      </div>
    );
  }
  
}

export default App;
