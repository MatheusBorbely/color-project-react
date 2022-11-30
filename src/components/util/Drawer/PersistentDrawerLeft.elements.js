import { styled } from '@mui/material/styles';

const drawerWidth = 240;
export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
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

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export const WrapperBtn = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: `space-around`,
  width: `100%`

}));

export const WrapperContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: `center`,
  width: `100%`
}));


