import styled from 'styled-components';
import { ColorBoxContainer, ColorBoxBtn} from '../ColorBox/ColorBox.elements';

export const SingleColorContainer = styled.section`
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const SingleColorBoxes = styled.div`
    height: 90%;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 50% 50% 50% 50% 50%; 
    display: grid;
`;

export const SingleColorGoBack = styled(ColorBoxContainer)`
    background: black;
    align-items: center;
    justify-content: center;
`;

export const SingleColorGoBackBtn = styled(ColorBoxBtn)`
    opacity: 1;
`;



