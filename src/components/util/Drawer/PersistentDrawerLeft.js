import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color';
import { Button } from '@mui/material';

import {Main, AppBar, DrawerHeader, WrapperBtn, WrapperContainer} from './PersistentDrawerLeft.elements'
import { DraggableColorBox } from '../../Palette/DraggableColorBox/DraggableColorBox';


export default function PersistentDrawerLeft() {
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('blue');
  const [colors, setColors] = useState([]);
  const drawerWidth = 240;

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
    setColors( (oldColors) => [...oldColors, currentColor])
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
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
          <Button variant='contained' color='secondary'>Limpar</Button>
          <Button variant='contained' color='primary'>Aleatoria</Button>
        </WrapperBtn>
        <ChromePicker color={currentColor} onChangeComplete={(newColor) => updateColor(newColor)}/>
        <Button variant='contained' color='primary' style={{ backgroundColor: currentColor}} onClick={addNewColor}>Adicionar Cor</Button>
        <Divider />
      </Drawer>
      <Main open={open}>
        
     
        {colors.map( c => <DraggableColorBox color={c}/>)}
      
        
      </Main>
      </WrapperContainer>
    </Box>
  );
}