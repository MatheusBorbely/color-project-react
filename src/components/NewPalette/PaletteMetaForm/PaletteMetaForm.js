import * as React from 'react';
import Button from '@mui/material/Button';
import {ValidatorForm, TextValidator, WrapperBtnsPaletteMeta} from './PaletteMetaForm.elements'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export default function PaletteMetaForm(props) {
    const [open, setOpen] = React.useState(false);
    const [namePalette, setNamePalette] = useState('');
    const [openDialog, setOpenDialog] = React.useState(false);
    const {palettes, handleSave} = props;
    useEffect(() => {
        ValidatorForm.addValidationRule('isNameUnique', (value) => 
          palettes.every( ({paletteName}) => value.toLowerCase() !== paletteName.toLowerCase())
        );
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (evt) => {
        setNamePalette(evt.target.value);
    }
    const handleSubmit = ({native}) => {
        handleSave(namePalette,native)
    }
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const handleOpen = () => {
        setOpenDialog(true);
        handleClose();
    }
 
  return (
    <>
        <Dialog open={openDialog} onClose={handleCloseDialog}>  
          <Picker tittle="Escolha um emoji "data={data} onEmojiSelect={handleSubmit} />
        </Dialog>
        <Button variant="outlined" onClick={handleClickOpen}>
            Salvar
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Selecione o nome da paleta.</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Escolha o nome da sua nova paleta, faça o nome ser ÚNICO ;).
            </DialogContentText>

            <ValidatorForm onSubmit={handleOpen}>
                <TextValidator 
                        label="Nome da Paleta"
                        value={namePalette}
                        onChange={handleChange}
                        validators={['required', 'isNameUnique']}
                        errorMessages={['Preencha o nome', 'O nome deve ser único']}
                    />
                    <WrapperBtnsPaletteMeta>
                        <Button type='submit' variant='contained' color='primary'>Salvar Paleta</Button>
                        <Button type='submit' variant="outlined" color="error" onClick={handleClose}>Cancelar</Button>
                    </WrapperBtnsPaletteMeta>
                </ValidatorForm>
            </DialogContent>
        </Dialog>
    </>
  );
}