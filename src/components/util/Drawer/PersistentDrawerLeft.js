import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color';
import { Button } from '@mui/material';
import {Main, DrawerHeader, WrapperBtn, WrapperContainer} from './PersistentDrawerLeft.elements'
import { DraggableColorBox } from '../../Palette/DraggableColorBox/DraggableColorBox';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useEffect } from 'react';
import chroma from "chroma-js";
import { useNavigate } from "react-router";
import NewPaletteNav from '../../NavBar/NewPaletteNav/NewPaletteNav';


export default function PersistentDrawerLeft(props) {
  const {savePalette, palettes} = props;
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('blue');
  const [boxesColor, setBoxesColor] = useState([]);
  const [currentName, setCurrentName] = useState('');
  const maxColors = 20;
  const fullPalette = boxesColor.length >= maxColors;
  const navigate = useNavigate();
  const drawerWidth = 240;

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
      boxesColor.every( ({name}) => value.toLowerCase() !== name.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) => 
      boxesColor.every( ({color}) => currentColor !== color.toLowerCase())
    );
  });
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
        <WrapperBtn>
          <Button variant='contained' color='secondary' onClick={clearPalettes}>Limpar</Button>
          <Button variant='contained' color='primary' onClick={getRandomColor}>Aleatoria</Button>
        </WrapperBtn>
        <ChromePicker color={currentColor} onChangeComplete={(newColor) => updateColor(newColor)}/>
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator 
            value={currentName}
            onChange={handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={['Preencha o nome', 'O nome deve ser único','A cor deve ser única']}
          />
            <Button type='submit' disabled={fullPalette} variant='contained' color='primary' style={{ color: colorText(currentColor) ,  backgroundColor: currentColor}}>{ fullPalette ? 'Paleta Cheia':'Adicionar Cor' }</Button>
        </ValidatorForm>
    
        <Divider />
      </Drawer>
      <Main open={open}>
        {boxesColor.map( box => <DraggableColorBox key={box.name} background={box.color} name={box.name} colorText={colorText} removeBox={removeBox} />)}
      </Main>
      </WrapperContainer>
    </Box>
  );
}