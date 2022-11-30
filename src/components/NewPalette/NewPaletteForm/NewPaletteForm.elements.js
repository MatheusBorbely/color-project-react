import  {styled as style} from '@mui/material/styles';
import styled  from "styled-components";
import drawerWidth from '../../util/drawerWidth';

export const Main = style('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      height:`100vh`,
      gridTemplateColumns: `20% 20% 20% 20% 20%`,
      gridTemplateRows: `25% 25% 25% 25% 25%`,
      display: 'grid',
      paddingTop: `64px`,
      overflow:'hidden',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
);

export const DrawerHeader = style('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export const WrapperContainer = style('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: `center`,
  width: `100%`
}));


export const MoreColor = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap:10px;
    height: 100%;
    width: 100%;
    border-radius:3px;
    border: 2px dotted #fff;
    background:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(to bottom, #FF0000, #FF7F00, #FFFF00, #00FF00, #00FFFF,#0000FF,#8B00FF) border-box;
    font-size: 18px;
    font-weight: bold;
    & svg {
      font-size: 2.5rem;
      fill: linear-gradient(to bottom, #FF0000, #FF7F00, #FFFF00, #00FF00, #00FFFF,#0000FF,#8B00FF);
    }
    background-image: linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #00FFFF,#0000FF,#8B00FF);
    color: black;
    background-clip: text;
    -webkit-background-clip: text;

    /* Adicionado: */
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    animation: kvAnimate 8s linear Infinite;
    
    @keyframes kvAnimate { 
        0% {
            background-position: 0%;
        }
        100% {
            background-position: -400%;
        }
    }

`;



