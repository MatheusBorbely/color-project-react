import styled from 'styled-components';
import { ColorBoxContainer, ColorBoxBtn} from '../Palette/ColorBox/ColorBox.elements';
import { device } from '../util/Device';

export const SingleColorContainer = styled.section`
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${device.mobile}{
        overflow : auto;
    }
`;

export const SingleColorBoxes = styled.div`
    height: 90%;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 50% 50% 50% 50% 50%; 
    display: grid;
    ${device.tablet}{
        grid-template-columns: 50% 50%;
        grid-template-rows: 20% 20% 20% 20% 20%;
        height: 100%;
    }
    ${device.mobile}{
        grid-template-columns: 100%;
        grid-template-rows: 65px;  
    }
`;

export const SingleColorGoBack = styled(ColorBoxContainer)`
    background: black;
    align-items: center;
    justify-content: center;
    ${device.mobile}{
        min-height: 70px;
    }
    
    
`;

export const SingleColorGoBackBtn = styled(ColorBoxBtn)`
    opacity: 1;
`;



