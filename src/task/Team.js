import * as React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { useLocation } from "react-router-dom";


const Team = ({ title }) => {
  const location = useLocation();
  const { tdata } = location.state;

  console.log(tdata)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    fetch(`http://127.0.0.1:5000/api/v1/${tdata._id}/teammember`, {
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
      return (res.json())
    }).then((data) => {
      console.log(data)
    });

  };
  const [role, setRole] = React.useState('');


  const handleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <h2>{title}</h2>

        <h1 style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}> ADD TEAM MEMBERS</h1>

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
        <Stack spacing={4} direction="row">
          <Button variant="contained" component={Link} to="/work" style={{ backgroundColor: "#e60023", marginTop: "24px", textAlign: "center", marginLeft: "78px", width: "32ch" }} >
            Cancel
          </Button>
          <Button type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }} variant="contained" style={{ backgroundColor: "#32de84", textAlign: "center", marginTop: "24px", marginLeft: "78px", width: "32ch" }} >
            Save
          </Button>
        </Stack>
        
      </Box>

      
    </>
  );

};

export default Team;

