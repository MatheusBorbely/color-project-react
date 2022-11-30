import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { AppBar} from './NewPaletteNav.elements'
import { Link } from 'react-router-dom';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { useEffect, useState } from 'react';

export default function NewPaletteNav(props) {
    const {open, handleDrawerOpen, handleSave, palettes} = props;
    const [namePalette, setNamePalette] = useState('');
    const handleChange = (evt) => {
        setNamePalette(evt.target.value);
    }
    const handleSubmit = () => {
        handleSave(namePalette)
    }
    useEffect(() => {
        ValidatorForm.addValidationRule('isNameUnique', (value) => 
          palettes.every( ({paletteName}) => value.toLowerCase() !== paletteName.toLowerCase())
        );
    });
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" open={open} color='default'>
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
                <ValidatorForm onSubmit={handleSubmit}>
                    <TextValidator 
                        value={namePalette}
                        onChange={handleChange}
                        validators={['required', 'isNameUnique']}
                        errorMessages={['Preencha o nome', 'O nome deve ser único']}
                    />
                    <Button type='submit' variant='contained' color='primary'>Salvar Paleta</Button>
                </ValidatorForm>
                <Link to='/'>
                    <Button variant='contained' >GO BACK</Button>
                </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}
