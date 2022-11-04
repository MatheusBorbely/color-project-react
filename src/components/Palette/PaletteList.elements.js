import styled from "styled-components";


export const PaletteListContainer = styled.section`
    background-color: blue;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
`;

export const PaletteListWrapper = styled.div`
    display: flex;
    width:50%;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
`;
export const PaletteListNav= styled.nav`
    display:flex;
    justify-content: space-between;
`;
export const PaletteListTitle = styled.h1`
    color:#fff;
`;


export const PaletteListPalettes = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: repeat(3,30%);
    grid-gap: 5%;
`;