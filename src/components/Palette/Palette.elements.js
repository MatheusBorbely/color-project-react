import styled from 'styled-components';
import { device } from '../util/Device';

export const Palettes = styled.section`
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${device.mobile}{
        overflow: auto;
    }
`;

export const PaletteColors = styled.div`
    height: 90%;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 25% 25% 25% 25% 25%;
    display: grid;
    ${device.tablet}{
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: 20% 20% 20% 20% 20%;
        height: 100%;
    }
    ${device.mobile}{
        grid-template-columns: 100%;
        grid-template-rows: 65px;  
    }

    

`;