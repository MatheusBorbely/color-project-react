import styled from "styled-components";
import { device } from '../util/Device';
import back from './back.svg'

export const PaletteListContainer = styled.section`
    background-image: url(${back});
    font-family: "Anton", sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    overflow: scroll;
    padding: 20px 0;
`;

export const PaletteListWrapper = styled.div`
    display: flex;
    width:50%;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;

    gap: 30px;
    ${device.laptop}{
        width: 80%;
        gap: 15px;
    }
    ${device.mobile}{
        width: 90%;
    }
`;
export const PaletteListNav= styled.nav`
    display:flex;
    justify-content: space-between;

`;
export const PaletteListTitle = styled.h1`
    color:#fff;
`;


export const PaletteListPalettes = styled.ul`
    width:100%;
    display: grid;
    grid-template-columns: repeat(3,30%);
    grid-gap: 5%;
    justify-content: center;
    ${device.mobileL}{
        grid-template-columns: repeat(2,45%);
    }
    ${device.mobile}{
        grid-template-columns: repeat(1,100%);
    }
`;
export const PaletteListNew = styled.div`
    
    & a{
        color: white;
        text-decoration: none;
        font-size: 14px;
    }
`;

