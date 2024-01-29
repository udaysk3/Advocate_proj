import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Cookies from 'universal-cookie';


const cookies = new Cookies();


const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch('http://127.0.0.1:8000/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": data.get('firstName') + data.get("lastName"),
        "email": data.get("email"),
        "password": data.get("password"),
        "phone": {
          "country_isd_code": data.get("country_isd_code"),
          "number": data.get("number")
        },
        "address": {
          "street": data.get("street"),
          "city": data.get("city"),
          "state": data.get("state"),
          "postalCode": data.get("postalCode"),
          "country": data.get("country")
        },
        "role": role
      }),
    }).then((res) => {
      return(res.json())
    }).then((data) => {
      console.log(data)
      cookies.set('token', data.data);
      console.log(cookies.get('token')); 
    });
    window.location.reload();
    window.location.href = '/';
  };
  const [role, setRole] = React.useState('');


  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={3} >
                <TextField
                  autoComplete="country_isd_code"
                  name="country_isd_code"
                  required
                  fullWidth
                  id="country_isd_code"
                  label="Code"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={9} >
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="Phone Number"
                  name="number"
                  autoComplete="number"
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  autoComplete="street"
                  name="street"
                  required
                  fullWidth
                  id="street"
                  label="Street"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  autoComplete="state"
                  name="state"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  fullWidth
                  id="postalCode"
                  label="Postal Code"
                  name="postalCode"
                  autoComplete="postalCode"
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  autoComplete="country"
                  name="country"
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  autoFocus
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
              <FormControl >
                <InputLabel id="demo-simple-select-label">Select Case</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select the Case"
                  value={role}
                  onChange={handleChange}
                  sx={{ width: '190px' }}
                >
                  <MenuItem value={'ADMIN'}>ADMIN</MenuItem>
                    <MenuItem value={'SENIOR_ADV'}>SENIOR_ADV</MenuItem>
                    <MenuItem value={'JUNIOR_ADV'}>JUNIOR_ADV</MenuItem>
                    <MenuItem value={'MUNSIF'}>MUNSIF</MenuItem>
                </Select>
                </FormControl>
                

              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="newpassword"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  {'Already have an account? Sign in'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}