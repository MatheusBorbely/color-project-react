import { React } from "react";
import seedColors from "./components/util/seedColors";
import Palette from "./components/Palette/Palette";
import {generatePalette} from "./components/util/colorHelpers";
import { Route, Routes, useParams } from 'react-router-dom';
import PaletteList from "./components/Palette/PaletteList";
import GlobalStyle from "./gobalStyles";
import SingleColor from "./components/Palette/SingleColor/SingleColor";
import NewPaletteForm from "./components/Palette/NewPaletteForm/NewPaletteForm";
import PersistentDrawerLeft from "./components/util/Drawer/PersistentDrawerLeft";
import { useState } from "react";


function App(){
  const [palettes, setPalettes] = useState(seedColors)
  const findPalette = id => palettes.find(palette => 
      palette.id === id
  );
  const savePalette = (newPalette) => {
    setPalettes((oldPalette) => [...oldPalette, newPalette])
  }
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
        <Route exact path="/" element={<PaletteList palettes={palettes}/>} />
        <Route exact path="/palette/new" element={ <NewPaletteForm />} />
        <Route exact path="/palette/news" element={ <PersistentDrawerLeft savePalette={savePalette} palettes={palettes} />} />
        <Route exact path="/palette/:id" element={ <PaletteComponentWrapper />} />
        <Route exact path="/palette/:id/:colorId" element={ <SingleColorWrapper />} />
      </Routes> 
    </>   
  );
}

export default App;
