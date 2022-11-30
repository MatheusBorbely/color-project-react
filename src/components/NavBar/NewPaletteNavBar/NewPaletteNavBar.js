import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { AppBar, ToolbarNav, WrapperNewPalette, ValidatorForm, TextValidator} from './NewPaletteNavBar.elements'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function NewPaletteNav(props) {
    const {open, handleSave, palettes} = props;
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
                <ToolbarNav>
                   
                    <Typography variant="h6" noWrap component="div">
                        Nova Paleta 
                    </Typography>
                    <WrapperNewPalette>
                        <ValidatorForm onSubmit={handleSubmit}>
                            <TextValidator 
                                label="Nome da Paleta"
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
                    </WrapperNewPalette>
                </ToolbarNav>
            </AppBar>
        </>
    )
}
