import React from 'react'
import { DraggableColorBoxContainer} from './DraggableColorBox.elements'

export const DraggableColorBox = (props) => {
  const {background, name} = props;
  return (
 
    <DraggableColorBoxContainer background={background} >
      <span>{name}</span>
    </DraggableColorBoxContainer>
  
    
  )
}
