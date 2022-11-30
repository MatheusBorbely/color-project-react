import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {Main, DrawerHeader, WrapperContainer, MoreColor} from './NewPaletteForm.elements'
import { DraggableColorBox } from '../DraggableColorBox/DraggableColorBox';
import chroma from "chroma-js";
import { useNavigate } from "react-router";
import NewPaletteNav from '../../NavBar/NewPaletteNavBar/NewPaletteNavBar';
import ColorPickerForm from '../ColorPickerForm/ColorPickerForm';
import drawerWidth from '../../util/drawerWidth';
import AddIcon from '@mui/icons-material/Add';

export default function NewPaletteForm(props) {
  const {savePalette, palettes} = props;
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('black');
  const [boxesColor, setBoxesColor] = useState([]);
  const [currentName, setCurrentName] = useState('');
  const maxColors = 20;
  const fullPalette = boxesColor.length >= maxColors;
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateColor = ({hex}) => {
    setCurrentColor(hex);
  };

  const addNewColor = () => {
    const newBox = {
      color: currentColor,
      name: currentName
    }
    setBoxesColor( (oldBoxes) => [...oldBoxes, newBox], setCurrentName(''))
    
  }
  const handleChange = (evt) => {
    setCurrentName(evt.target.value)
  }
  const handleSave = (newName) => {
    const newPalette = {
      paletteName: newName,
      id: newName.toLocaleLowerCase().replace(/ /g,"-"),
      emoji: "🎨",
      colors: boxesColor 
    }
    savePalette(newPalette);
    navigate(`/`)
  }
  const colorText = (color) => {
    return chroma.contrast(color, "black") < 6 ? '#FFF' : '#000'
  }
  const removeBox = (nameColor) => {
    setBoxesColor(boxesColor.filter(({name}) => name !== nameColor))
  }
  const clearPalettes = () => {
    setBoxesColor([])
  }
  const getRandomColor = () => {
    const randomColor = { hex: chroma.random().hex() };
    if(boxesColor.some( ({color}) => color === randomColor.hex )){
      getRandomColor();
    }else{
      setCurrentColor(randomColor.hex);
    }
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <NewPaletteNav open={open} handleSave={handleSave} handleDrawerOpen={handleDrawerOpen} palettes={palettes}/>
      <WrapperContainer>
      <Drawer
        sx={{
          width: drawerWidth,
          alignItems: `center`,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            alignItems: `center`,
            gap: `30px`,
            paddingTop: `70px`
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            position: `absolute`,
            top: 0,
            right: 0
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon/>
          </IconButton>
        </DrawerHeader>
        <Typography variant='h5'>Estilize sua paleta</Typography>
        <ColorPickerForm 
            clearPalettes={clearPalettes}
            getRandomColor={getRandomColor}
            currentColor={currentColor} 
            updateColor={updateColor}
            addNewColor={addNewColor}
            currentName={currentName}
            handleChange={handleChange}
            fullPalette={fullPalette}
            colorText={colorText}
            boxesColor={boxesColor}
         />
    
        <Divider />
      </Drawer>
      <Main open={open}>
        {boxesColor.map( box => <DraggableColorBox key={box.name} background={box.color} name={box.name} colorText={colorText} removeBox={removeBox} />)}
        {!fullPalette && <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, marginLeft:'8px', marginRight: '8px',padding: '0px',marginTop:'4px', ...(open && { display: 'none' }) }}
        >
          <MoreColor>
            <AddIcon/>
            Adicionar Cor
          </MoreColor>
        </IconButton>}
      </Main>
      </WrapperContainer>
    </Box>
  );
}