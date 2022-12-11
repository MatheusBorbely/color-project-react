import styled from 'styled-components';
import { device } from '../util/Device';

export const Palettes = styled.section`
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${device.mobile}{
        overflow-y: auto;
    }
`;

export const PaletteColors = styled.div`
    height: 90%;
    grid-template-columns: repeat(5,20%);
    grid-template-rows: repeat(4,25%);
    display: grid;
    ${device.tablet}{
        grid-template-columns: repeat(4,25%);
        grid-template-rows: repeat(5,20%);
        height: 100%;
    }
    ${device.mobileL}{
        grid-template-columns: repeat(2,50%);
        grid-template-rows: repeat(10,10%); 
    }
    ${device.mobile}{
        grid-template-columns: 100%;
        grid-template-rows: 65px;  
    }

    

`;