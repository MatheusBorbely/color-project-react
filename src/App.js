import { React } from "react";
import seedColors from "./components/util/seedColors";
import Palette from "./components/Palette/Palette";
import {generatePalette} from "./components/util/colorHelpers";
import { Route, Routes, useParams } from 'react-router-dom';
import PaletteList from "./components/Palette/PaletteList";

function App(){

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
