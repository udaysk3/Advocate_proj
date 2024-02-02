import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scheduler from './components/Scheduler/Scheduler';
import Case from 'case/Case';
import Form from 'case/Form';
import Fir from 'case/Fir';
import Edit from 'case/Edit';
import Ufir from 'case/Ufir';
import Documents from 'case/Documents';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from 'newdashboard/Header';
import Team from 'task/Team';
import Tform from 'task/Tform';
import Eform from 'task/Eform';
import Work from 'task/Work';
import Members from 'task/Members';
import Pay from 'pay/Pay';
import Trans from 'pay/Trans';
import SignIn from 'sign-in/SignIn';
import SignUp from 'sign-in-side/SignUp';
import SignInSide from 'sign-in-side/SignInSide';
import Title from 'newdashboard/Title';
import Maindash from 'pages/Maindash';





export default function App() {
  const defaultTheme = createTheme();
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          
          <Header />

          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
              <Routes>
                <Route path="/" element={<Maindash />} />
                <Route path="case" element={<Case />} />
                <Route path="Edit" element={<Edit />} />
                <Route path="Form" element={<Form />} />
                <Route path="Fir" element={<Fir />} />
                <Route path="Ufir" element={<Ufir />}/>
                <Route path="Scheduler" element={<Scheduler />}/>
                <Route path="Work" element={<Work />}/>
                <Route path="Team" element={<Team />}/>
                <Route path="Tform" element={<Tform />}/>
                <Route path="Eform" element={<Eform />}/>
                <Route path="Pay" element={<Pay />}/>
                <Route path="Trans" element={<Trans/>}/>
                <Route path="SignIn" element={<SignIn/>}/>
                <Route path="SignInSide" element={<SignInSide/>}/>
                <Route path="SignUp" element={<SignUp/>}/>
                <Route path="Title" element={<Title/>}/>
                <Route path="Documents" element={<Documents/>}/>
                <Route path="Members" element={<Members/>}/>
               
            
              </Routes>
            
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}
