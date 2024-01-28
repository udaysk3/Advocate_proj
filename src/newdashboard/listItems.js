import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
//import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';



export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
      <ListItemText primary="MAIN MENU" sx= {{ color: 'blue' }}/>
    </ListItemIcon>
    </ListItemButton>
    <ListItemButton component={Link} to = "/" >
      
      <ListItemIcon>
        <DashboardIcon sx={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText primary="Dashboard"  />
    </ListItemButton  >
    <ListItemButton component={Link} to = "/form">
      <ListItemIcon>
      <FolderIcon sx={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText primary="Cases"  />
    </ListItemButton> 
    </React.Fragment>
);
export const secondaryListItems = (
<React.Fragment>

    <ListItemButton>
      <ListItemIcon>
      <ListItemText primary="Workspace" sx={{ color: 'blue' }}/>
    </ListItemIcon>
    </ListItemButton>
    <ListItemButton component={Link} to = "/scheduler">
      <ListItemIcon>
        <ScheduleIcon sx={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText primary="Schedule Post" />
    </ListItemButton>
    <ListItemButton component={Link} to = "/work">
      <ListItemIcon>
        <AccountCircleIcon   sx={{ color: '#fff' }}/>
      </ListItemIcon>
      <ListItemText primary="Task" />
    </ListItemButton>
    <ListItemButton component={Link} to = "/Pay">
      <ListItemIcon>
        <PeopleIcon sx={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText primary="Payment" />
    </ListItemButton>
  </React.Fragment>
);

export const thirdListItems = (
  <React.Fragment >
    <ListItemButton component={Link} to = "/SignInSidej ">
      <ListItemIcon>
        <SettingsIcon sx={{ color: '#fff' }} />
      </ListItemIcon >
      <ListItemText primary="Settings"  />
    </ListItemButton>
    </React.Fragment>
);

