import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { AppBar, ToolbarNav, WrapperNewPalette } from './NewPaletteNavBar.elements'
import { Link } from 'react-router-dom';

import PaletteMetaForm from '../../NewPalette/PaletteMetaForm/PaletteMetaForm';


export default function NewPaletteNav(props) {
    const {open, handleSave, palettes} = props;
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" open={open} color='default'>
                <ToolbarNav>
                    <Typography variant="h6" noWrap component="div">
                        Nova Paleta 
                    </Typography>
                    <WrapperNewPalette>
                        <PaletteMetaForm handleSave={handleSave} palettes={palettes} />
                        <Link to='/'>
                            <Button variant="outlined" color="error" >GO BACK</Button>
                        </Link>
                    </WrapperNewPalette>
                </ToolbarNav>
            </AppBar>
        </>
    )
}
