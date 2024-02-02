import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems, thirdListItems } from './listItems';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

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
  const navigate = useNavigate();


  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [bopen, setbOpen] = React.useState(false);

  const handleClick = () => {
    setbOpen(!bopen);
  };

  const cookies = new Cookies();
  const [signup, setSignup] = useState('signup');
  const [link, setLink] = useState('/signup');
  useEffect(() => {
    if (cookies.get('token')) {
      setSignup('Logout');
      setLink('/logout');
    } else {
      setSignup('Signup');
      setLink('/signup');
    }
  }, [cookies.get('token')]);

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
              ...(open)
            }}
          >
            <MenuIcon />
          </IconButton>
          <Grid item container alignItems="flex-end" direction="column">
            {signup !== 'Logout' ? <Link to={link}>
              <Button
                role="link"
                variant="contained"
              >
                Signup

              </Button>
            </Link> : <List
              sx={{ width: '100%', maxWidth: 180, bgcolor: 'white', color: 'black' }}
              component="nav"
            >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {bopen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={bopen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => {

                    cookies.remove('token');
                    navigate("/");
                  }
                  }>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>}





          </Grid>
        </Toolbar>

      </AppBar >
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
