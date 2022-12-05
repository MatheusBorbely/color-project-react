import { React, useEffect } from "react";
import seedColors from "./components/util/seedColors";
import Palette from "./components/Palette/Palette";
import {generatePalette} from "./components/util/colorHelpers";
import { Route, Routes, useParams } from 'react-router-dom';
import PaletteList from "./components/PalleteList/PaletteList";
import GlobalStyle from "./gobalStyles";
import SingleColor from "./components/SingleColor/SingleColor";
import NewPaletteForm from "./components/NewPalette/NewPaletteForm/NewPaletteForm";
import { useState } from "react";


function App(){
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
  const [palettes, setPalettes] = useState(savedPalettes || seedColors)

  useEffect(() => {
    syncLocalStorage();
  }, [palettes]);

  const syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes))
  }
  const findPalette = id => palettes.find(palette => 
      palette.id === id
  );
  const removePalette = (idRemove) => {
    setPalettes(palettes.filter(({id}) => id !== idRemove))
  };
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
        <Route exact path="/" element={<PaletteList removePalette={removePalette} palettes={palettes}/>} />
        <Route exact path="/palette/new" element={ <NewPaletteForm savePalette={savePalette} palettes={palettes} />} />
        <Route exact path="/palette/:id" element={ <PaletteComponentWrapper />} />
        <Route exact path="/palette/:id/:colorId" element={ <SingleColorWrapper />} />
      </Routes> 
    </>   
  );
}

export default App;
