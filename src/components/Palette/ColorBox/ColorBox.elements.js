import styled from 'styled-components';

const handleOverlay = overlay => {
    switch (overlay) {
        case true:
            return `
            opacity: 1;
            transform: scale(50);
            z-index: 10;
            width: 100%;
            height: 100%;
            `;
        case false:
            return `
            opacity: 0;
            z-index: 0;
            height: 0px;
            width: 0px;
            transform: scale(0.1);
            `;
        default:
            return;
    }
}

const handleOverlayMgs = overlay => {
    switch (overlay) {
        case true:
            return `
            opacity: 1;
            pointer-events: all;
            z-index: 27; 
            transform: scale(1);
            transition: all 0.4s ease-in-out;
            transition-delay: 0.3s;
            `;
        case false:
            return `
            opacity: 0;
            pointer-events: none;
            transform: scale(0.1);
            `;
        default:
            return;
    }
}

export const ColorBoxBtn = styled.button`
    transform: translateY(50%);
    cursor: pointer;
    width: 100px;
    height: 30px;
    display: inline-block;
    outline: none;
    background-color: rgba(255,255,255, 0.3);
    font-size: 1rem;
    color: white;
    opacity: 0;
    border: none;
    line-height: 30px;
    transition: 0.5s;
    font-size: 12px;
`;

export const ColorBoxContainer = styled.div`
    width: 20%;
    height: 25%;
    cursor: pointer;
    display: inline-flex;
    position: relative;
    flex-direction: column;
    text-transform: uppercase;
    background-color: ${props => props.background};

    &:hover ${ColorBoxBtn} {
        opacity: 1;
    }
    
`;

export const ColorBoxBtnWrapper = styled.div`
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;



export const ColorBoxInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-basis: 50%;
    
`;

export const ColorBoxInfoName = styled.span`
    color: black;
    letter-spacing: 1px;
    padding: 10px;
    font-size: 12px;
    
`;

export const ColorBoxInfoMore = styled.span`
    
    & a {
        text-decoration: none;
        background-color: rgba(255,255,255, 0.3);
        color: white;
        font-size: 12px;
        width: 60px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        display: block;
    }
    
`;

export const ColorBoxOverlay = styled.div`
    transition: transform 0.6s ease-in-out;
    background-color: ${props => props.background};
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ overlay }) => handleOverlay(overlay)}
`;
export const ColorBoxMgsWrapper = styled.div`
   
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${({ overlay }) => handleOverlayMgs(overlay)}
`;
export const ColorBoxMgsTitle = styled.h2`
    text-shadow: 1px 2px black;
    font-weight: 400;
    font-size: 4rem;
    color: white;
    margin: 10px auto;
    background-color: rgba(255,255,255, 0.3);
    width: 100%;
    text-align: center;
    padding: 10px;
`;

export const ColorBoxMgsSubtitle = styled.h4`
    text-shadow: 1px 2px black;
    font-weight: 400;
    color: white;
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 100;
`;

