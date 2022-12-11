import styled from 'styled-components';
import { device } from '../../util/Device';

export const Nav = styled.header`
    background: transparent;
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const NavLogo = styled.div`
    padding: 14px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e2e2e2;
    font-size: 17px;
    & a {
        text-decoration: none;
        color: black;
        font-weight: 600;
    }
    ${device.mobileL}{
        display: none;
    }
`;
export const SliderComponent = styled.div`
    width: 70%;
    & .rc-slider-track {
        position: absolute;
        height: 4px;
        background-color: none;
        border-radius: 6px;
        background-image: bac;
        background: linear-gradient(90deg, rgba(243,156,18,1) 0%, rgba(93,18,243,1) 44%, rgba(0,255,21,0.8659664549413515) 82%);
    }
    & .rc-slider-handle,
      .rc-slider-handle:hover,
      .rc-slider-handle:active,
      .rc-slider-handle:focus
    {
      background-color: green;
      outline: none;
      border: 2px solid green;
      box-shadow: none;
    }
`;
export const NavSlider = styled.div`
    width: 370px;
    margin: 0px 5px;
    display: inline-flex;
    align-items: center;
    gap: 20px;
    ${device.mobileL}{
        width: 200px;
    }
`;
export const NavbarLevel = styled.div`
  display: flex;
  gap: 10px;
  
`;
export const NavSelect = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
    & .MuiInputBase-root{
        min-width: 100px;
    }
    & .MuiSelect-select {
        padding: 10px 10px !important;
        padding-right: 32px !important;
        font-size: 14px !important;
    }
`;
export const NavLevelCurrent = styled.span`
  color:black;
`;



