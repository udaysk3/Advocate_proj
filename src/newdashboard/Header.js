import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems, thirdListItems } from './listItems';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor: 'white',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: 'rgb(0, 3, 71)',
    color: 'white',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(0)
      }
    })
  }
}));

const drawerWidth = 260;

export default function Header() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px',
            backgroundColor: '#fff'
          }}
        >
          <IconButton
            edge="start"
            color="#fff"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              color: 'rgb(0, 0, 0)',
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="#000" noWrap sx={{ flexGrow: 1 }}></Typography>
        </Toolbar>
        <AccountCircleIcon />
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            color: '#fff',
            px: [1]
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
          <Divider sx={{ my: 1 }} />
          {thirdListItems}
        </List>
      </Drawer>
    </>
  );
}
