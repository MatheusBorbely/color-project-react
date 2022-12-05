import MuiAppBar from '@mui/material/AppBar';
import drawerWidth from '../../util/drawerWidth';
import  {styled as style} from '@mui/material/styles';
import styled  from "styled-components";
import Toolbar from '@mui/material/Toolbar';


export const AppBar = style(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

export const ToolbarNav = styled(Toolbar)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const WrapperNewPalette = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 80%;
    justify-content: flex-end;
`;
