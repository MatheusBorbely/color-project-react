import React from 'react'
import { DraggableColorBoxContainer, DraggableColorBoxName} from './DraggableColorBox.elements'
import { Delete } from '@mui/icons-material';


export const DraggableColorBox = (props) => {
  const {background, name, colorText, removeBox} = props;
  const handleRemove = () => {
    removeBox(name);
  }
  return (
    <DraggableColorBoxContainer background={background} >
      <DraggableColorBoxName color={colorText(background)}>{name}</DraggableColorBoxName>
      <Delete sx={{ color: colorText(background) }} onClick={handleRemove}/>
    </DraggableColorBoxContainer>
  )
};

