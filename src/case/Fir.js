import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { useLocation } from "react-router-dom";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Fir = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  var postData = { ...formData }
  const initialFirData = {
    policeStation: '',
    FIRNumber: '',
    FIRDate: '',
    courtNumber: '',
    caseNumber: '',
    courtType: '',
    judgePost: '',
    judgeName: '',
    caseStatus: '',
  };

  const [firData, setFirData] = React.useState(initialFirData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFirData((prevFirData) => ({
      ...prevFirData,
      [name]: value,
    }));
  };

  const handleDateChange = (name, date) => {
    setFirData((prevFormData) => ({
      ...prevFormData,
      [name]: date,
    }));
  };
  
  const handleSubmit = () => {
    // Access the form data in the firData object
    postData = { ...postData, ...firData }
    console.log(postData)
    
    fetch('/api/v1/case', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJjNTliYzUxOS05NmJkLTQ0YTQtYjJkNi03ODlhNTk4MmRhMjEiLCJlbWFpbCI6InB1dnZ1bGFzYWlnb3d0aGFtQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcwNjUxOTY2MSwiZXhwIjoxNzA2NTIzMjYxfQ.NVdOEBFDpbG2q8pBMotYdRxFjCf7DOMLrSD8rqVj_1E'
      },
      body: JSON.stringify(postData),

    });



    // Reset the form data after submission if needed
    setFirData(initialFirData);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '61ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <h1 style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}> Add FIR Details</h1>

      {/* Police Station */}
      <div>
        <TextField
          id="outlined-flexible"
          label="Police Station"
          name="policeStation"
          value={firData.policeStation}
          onChange={handleChange}
          maxRows={2}
        />
        <FormControl sx={{ marginTop: '9px', marginLeft: '7px' }}>
          <InputLabel id="demo-simple-select-label">Court Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Court Type"
            value={firData.courtType}
            onChange={handleChange}
            name="courtType"
            sx={{ width: '12rem' }}
          >
            <MenuItem value={'DISTRICTCOURT'}>DISTRICTCOURT</MenuItem>
            <MenuItem value={'HIGHCOURT'}>HIGHCOURT</MenuItem>
            <MenuItem value={'SUPREMECOURT'}>SUPREMECOURT</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ marginTop: '9px', marginLeft: '7px' }}>
          <InputLabel id="demo-simple-select-label">Case Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Case Status"
            value={firData.caseStatus}
            onChange={handleChange}
            name="caseStatus"
            sx={{ width: '12rem' }}
          >
            <MenuItem value={'PENDING'}>PENDING</MenuItem>
            <MenuItem value={'OPEN'}>OPEN</MenuItem>
            <MenuItem value={'INACTIVE'}>INACTIVE</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* FIR Number and FIR Date */}
      <div>
        <TextField
          id="outlined-flexible"
          label="FIR Number"
          name="firNumber"
          value={firData.firNumber}
          onChange={handleChange}
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="FIR Date"
          name="firDate"
          value={firData.firDate}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label="Select Date"
              name="FIRdate"
              onChange={(date) => handleDateChange('startDate', date)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>

      {/* Court Number and Case Number */}
      <div>
        <TextField
          id="outlined-flexible"
          label="Court Number"
          name="courtNumber"
          value={firData.courtNumber}
          onChange={handleChange}
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Case Number"
          name="caseNumber"
          value={firData.caseNumber}
          onChange={handleChange}
        />
      </div>



      {/* Judge Post and Judge Name */}
      <div>
        <TextField
          id="outlined-flexible"
          label="Judge Post"
          name="judgePost"
          value={firData.judgePost}
          onChange={handleChange}
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Judge Name"
          name="judgeName"
          value={firData.judgeName}
          onChange={handleChange}
        />

      </div>

      {/* Buttons */}
      <div>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            style={{ backgroundColor: "#141963" }}
            onClick={handleSubmit}
          >
            ADD DATA
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#141963" }}
            component={Link}
            to="/documents"
            state={{
              formData: { ...postData }
            }}
          >
            UPLOAD DOCUMENT
          </Button>
        </Stack>
      </div>
    </Box>
  );
};

export default Fir;
