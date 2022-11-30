import styled from 'styled-components';
import { ColorBoxContainer } from '../../Palette/ColorBox/ColorBox.elements';

export const DraggableColorBoxContainer = styled(ColorBoxContainer)`
    justify-content: space-between;
    padding: 3px 8px;
    align-items: flex-end;
    flex-direction: row;
`;

export const DraggableColorBoxName = styled.span`
    font-size: 15px;
    color : ${props => props.color};
`;



