import React from 'react';
import { useEffect } from 'react';
import { FormContainer, WrapperBtn, Button, TextValidator, ValidatorForm } from './ColorPickerForm.element';
import { ChromePicker } from 'react-color';


export default function ColorPickerForm(props) {

    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
          boxesColor.every( ({name}) => value.toLowerCase() !== name.toLowerCase())
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) => 
          boxesColor.every( ({color}) => currentColor !== color.toLowerCase())
        );
    });

    const {
        clearPalettes,
        getRandomColor,
        currentColor,
        updateColor,
        addNewColor,
        currentName,
        handleChange,
        fullPalette,
        colorText,
        boxesColor 
    } = props; 

    return (
        <FormContainer>
            <WrapperBtn>
            <Button variant='contained' style={{ color: colorText(currentColor) ,  backgroundColor: currentColor}} onClick={clearPalettes}>Limpar</Button>
            <Button variant='contained' style={{ color: colorText(currentColor) ,  backgroundColor: currentColor}} onClick={getRandomColor}>Aleatoria</Button>
            </WrapperBtn>
            <ChromePicker width='100%' color={currentColor} onChangeComplete={(newColor) => updateColor(newColor)}/>
            <ValidatorForm onSubmit={addNewColor}>
                <TextValidator 
                    value={currentName}
                    onChange={handleChange}
                    validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={['Preencha o nome', 'O nome deve ser único','A cor deve ser única']}
                    label="Nome da Cor"
                />
                <Button type='submit' 
                    disabled={fullPalette} 
                    variant='contained' 
                    color='primary'
                    padding='16px 16px' 
                    style={{ color: colorText(currentColor) ,  backgroundColor: currentColor}}>
                        { fullPalette ? 'Paleta Cheia':'Adicionar Cor' }
                </Button>
            </ValidatorForm>
        </FormContainer>
    )
}