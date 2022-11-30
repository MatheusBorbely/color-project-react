import styled from "styled-components";


export const MiniPaletteContainer = styled.section`
    border: 1px solid black;
    position: relative;
    overflow: hidden;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: white;
    &:hover{
        cursor: pointer;
    }
    
`;
export const MiniPaletteColors = styled.div`
    background: ${props => props.background};
    width:20%;
    height:25%;
    display:inline-block;
    position: relative;
`;
export const MiniPaletteColorsBox = styled.div`
    height: 140px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    background-color: #f2f2f2;
`;
export const MiniPaletteWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:6px;
    margin: 0;
    font-size: 1rem;
    position:relative;
    padding: 6px 0 0;
`;
export const MiniPaletteName= styled.span`
    
`;
export const MiniPaletteIcon = styled.i`
    
`;