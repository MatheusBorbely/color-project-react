import { React } from "react";
import seedColors from "./seedColors";
import Palette from "./Palette";
import {generatePalette} from "./colorHelpers";
import { Route, Routes, useParams } from 'react-router-dom';
import PaletteList from "./PaletteList";



const App = () => {
  const findPalette = id => seedColors.find(palette => 
      palette.id === id
  );
  const PaletteComponentWrapper = () => {
      const { id } = useParams();
      return <Palette palette={generatePalette(findPalette(id))} />;
  };
    return (
    
          <Routes>
            <Route exact path="/" element={<PaletteList palettes={seedColors}/>} />
            <Route exact path="/palette/:id" element={ <PaletteComponentWrapper />} />
          </Routes>
    );
  
  
}

export default App;
