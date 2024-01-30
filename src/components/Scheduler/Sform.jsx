// Sform.js
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Sform({ schedulerEvents, onSubmit }) {
  const [data, setdata] = React.useState({
    age: '',
    date: dayjs('2022-04-17'),
    note: '',
    time: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setdata((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setdata((prevFormData) => ({
      ...prevFormData,
      date,
    }));
  };

  const handleTimeChange = (time) => {
    setdata((prevFormData) => ({
      ...prevFormData,
      time,
    }));
  };

  const handleSubmit = () => {
    // Call the onSubmit prop to pass both schedulerEvents and form data to the parent
    if (onSubmit) {
      onSubmit({ ...data, schedulerEvents });
    }
  };

  return (
    <Stack spacing={2} direction="row">
      <Box
        sx={{ display: 'flex', '& .MuiTextField-root': { m: 1, width: 260 } }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ marginTop: '18px' }}>
          <InputLabel id="demo-simple-select-label">Select Case</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.age}
            name="age"
            label="Select the Case"
            onChange={handleChange}
          >
            <MenuItem value={10}>Criminal</MenuItem>
            <MenuItem value={20}>Sales</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
          <TextField
            id="outlined-basic"
            label="Add Note"
            variant="outlined"
            value={data.note}
            name="note"
            onChange={handleChange}
          />
          <Stack>
            <div>
              <Button
                variant="contained"
                style={{ textAlign: 'center', backgroundColor: '#141963', width: 156 }}
                onClick={handleSubmit}
              >
                Schedule
              </Button>
            </div>
          </Stack>
        </FormControl>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker name="date" value={data.date} onChange={handleDateChange} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
              <TimePicker label="Select Time" value={data.time} onChange={handleTimeChange} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </Box>
    </Stack>
  );
}

