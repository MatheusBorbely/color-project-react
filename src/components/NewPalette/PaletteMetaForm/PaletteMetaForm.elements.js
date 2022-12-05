import styled  from "styled-components";
import { TextValidator as input, ValidatorForm as form } from 'react-material-ui-form-validator';

export const ValidatorForm = styled(form)`
    display:flex;
    flex-direction: column;
    gap:30px;
    margin-top:20px;
`;
export const TextValidator = styled(input)`
    width: 100%;
    & div, input{
        width: 100%;  
    }
    & input{
        padding: 8.5px 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & label{
        top:-5px;
    }

`;

export const WrapperBtnsPaletteMeta = styled.div`

    display:flex;
    flex-direction: row;
    gap:40px;
    justify-content: flex-end;

`;