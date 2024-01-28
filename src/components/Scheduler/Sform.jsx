import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


export default function Sform() {
  const [age, setAge] = React.useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Stack spacing={2} direction="row">
    <Box sx={{ display:'flex','& .MuiTextField-root': { m: 1, width: 260 }}} component="form"
    noValidate
    autoComplete="off">
    <FormControl sx={{ marginTop:'18px'}}>
      <InputLabel id="demo-simple-select-label">Select Case</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Select the Case"
        onChange={handleChange}
      >
        <MenuItem value={10}>Criminal</MenuItem>
        <MenuItem value={20}>Sales</MenuItem>
        <MenuItem value={30}>Other</MenuItem>
      </Select>
      <TextField  id="outlined-basic" label="Add Note" variant="outlined" /> 
      <Stack>
<div>

<Button  variant="contained" style={{textAlign: 'center', backgroundColor:"#141963",width:156}}onclickhandle="submit" >
   Schedule
  </Button>
</div>
</Stack>
    </FormControl>
    <div >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Select Date" />
      </DemoContainer>
    </LocalizationProvider>
    </div>
    <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="Select Time" />
      </DemoContainer>
    </LocalizationProvider>   
   </div>
</Box>
</Stack>
  );
}
