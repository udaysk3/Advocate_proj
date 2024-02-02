import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

const Tform = ({ title }) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [taskFormData, setTaskFormData] = React.useState({
    subject: '',
    taskId: '',
    startDate: null,
    deadline: null,
    status: '',
    priority: '',
    assignedTo: '',
    relatedTo: '',
    casePersonName: '',
    caseNumber: '',
    taskDescription: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTaskFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (name, date) => {
    const selectedDate = date instanceof Date ? date : new Date(date);
    setTaskFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedDate,
    }));
  };

  const handleSubmit = () => {
    fetch('http://127.0.0.1:8000/api/v1/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': cookies.get('token'),
      },
      body: JSON.stringify(taskFormData),

    }).then((res) => {
      return (res.json())
    }).then((data) => {
      navigate('/Team',{state:{tdata: data}})
    });

  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '77ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <h2>{title}</h2>
      <h1 style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}>ADD TASKS</h1>
      <div>
        <TextField
          id="outlined-subject"
          label="Subject"
          name="subject"
          onChange={handleChange}
          multiline
        />
        <TextField
          id="outlined-taskId"
          label="Task Id"
          name="taskId"
          onChange={handleChange}
          multiline
        />
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              name="startDate"
              label="Start Date"
              onChange={(date) => handleDateChange('startDate', date)}
            />
          </DemoContainer>
        </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="End Date"
              name="deadline"
              onChange={(date) => handleDateChange('deadline', date)}
              />
            </DemoContainer>
          </LocalizationProvider>
          
      </div>
      <div>
        <FormControl sx={{ marginTop: '9px', marginLeft: '7px' }}>
          <InputLabel id="status-label">Select Status</InputLabel>
          <Select
            labelId="status-label"
            id="status-select"
            label="Select Status"
            name="status"
            sx={{ width: '12rem' }}
            onChange={handleChange}
          >
            <MenuItem value={'PENDING'}>PENDING</MenuItem>
            <MenuItem value={'OPEN'}>OPEN</MenuItem>
            <MenuItem value={'INACTIVE'}>INACTIVE</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginTop: '9px', marginLeft: '7px' }}>
          <InputLabel id="priority-label">Select Priority</InputLabel>
          <Select
            labelId="priority-label"
            id="priority-select"
            label="Priority"
            name="priority"
            sx={{ width: '12rem' }}
            onChange={handleChange}
          >
            <MenuItem value={'LOW'}>LOW</MenuItem>
            <MenuItem value={'MEDIUM'}>MEDIUM</MenuItem>
            <MenuItem value={'HIGH'}>HIGH</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <TextField
          id="outlined-assignedTo"
          label="Assign To"
          name="assignedTo"
          onChange={handleChange}
          multiline
        />
        <TextField
          id="outlined-relatedTo"
          label="Related To"
          name="relatedTo"
          onChange={handleChange}
          multiline
        />
      </div>
      <div>
        <TextField
          id="outlined-casePersonName"
          label="Case Person Name"
          name="casePersonName"
          onChange={handleChange}
          multiline
        />
        <TextField
          id="outlined-caseNumber"
          label="Case Number"
          name="caseNumber"
          onChange={handleChange}
          multiline
        />
      </div>
      <div>
        <TextField
          id="outlined-taskDescription"
          label="taskDescription"
          name="taskDescription"
          onChange={handleChange}
          multiline
        />
      </div>
      <div>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            component={Link}
            to="/Team"
            style={{ backgroundColor: "#e60023", marginTop: "24px", textAlign: "center", marginLeft: "58px", width: "32ch" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            style={{ backgroundColor: "#32de84", textAlign: "center", marginTop: "24px", marginLeft: "58px", width: "32ch" }}
          >
            Save
          </Button>
        </Stack>
      </div>
    </Box>
  );
};

export default Tform;
