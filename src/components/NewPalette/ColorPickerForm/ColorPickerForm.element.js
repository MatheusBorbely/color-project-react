import  {styled as style} from '@mui/material/styles';
import { Button as btn } from '@mui/material';
import { TextValidator as input, ValidatorForm as form } from 'react-material-ui-form-validator';
import styled  from "styled-components";

export const WrapperBtn = style('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: `space-around`,
    width: `100%`,
    gap:`20px`
  
}));
export const FormContainer = styled.div`
    flex-direction: column;
    width:80%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    gap:30px;
`;

export const Button = styled(btn)`
    flex:30%;
    padding: ${props => props.padding && `${props.padding} !important`};
`;
export const ValidatorForm = styled(form)`
    display:flex;
    flex-direction: column;
    gap:30px;
    width:100%;
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
