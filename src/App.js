import { React } from "react";
import seedColors from "./components/util/seedColors";
import Palette from "./components/Palette/Palette";
import {generatePalette} from "./components/util/colorHelpers";
import { Route, Routes, useParams } from 'react-router-dom';
import PaletteList from "./components/Palette/PaletteList";
import GlobalStyle from "./gobalStyles";
import SingleColor from "./components/Palette/SingleColor/SingleColor";

function App(){

  const findPalette = id => seedColors.find(palette => 
      palette.id === id
  );

  const PaletteComponentWrapper = () => {
      const { id } = useParams();
      return <Palette palette={generatePalette(findPalette(id))} />;
  };
  const SingleColorWrapper = () => {
    const { id, colorId } = useParams();
    return <SingleColor palette={generatePalette(findPalette(id))} colorId={colorId} />;
  };
  return (
    <>
    <GlobalStyle/>
    <Routes>
      <Route exact path="/" element={<PaletteList palettes={seedColors}/>} />
      <Route exact path="/palette/:id" element={ <PaletteComponentWrapper />} />
      <Route exact path="/palette/:id/:colorId" element={ <SingleColorWrapper />} />
    </Routes> 
    </>   
  );
}

export default App;
