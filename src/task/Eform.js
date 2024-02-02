import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'universal-cookie';
import { useNavigate, useLocation } from 'react-router-dom';

const Tform = ({ title }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { _id } = location.state;
    const cookies = new Cookies();

    const [taskFormData, setTaskFormData] = useState({
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

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/v1/task/${_id}`, {
            method: 'GET',
            headers: {
                'token': cookies.get('token'),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                // Prefill the form data with fetched data
                setTaskFormData(data);
            });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setTaskFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // const handleDateChange = (name, date) => {
    //     const selectedDate = date instanceof Date ? date : new Date(date);
    //     setTaskFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: selectedDate,
    //     }));
    // };

    const handleSubmit = () => {
        fetch(`http://127.0.0.1:8000/api/v1/task/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'token': cookies.get('token'),
            },
            body: JSON.stringify(taskFormData),
        });

        navigate('/work');
        console.log('Task Form Data:', taskFormData);
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
            <h1 style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}>Update TASKS</h1>
            <div>
                <TextField
                    id="outlined-subject"
                    label="Subject"
                    name="subject"
                    onChange={handleChange}
                    multiline
                    value={taskFormData.subject}
                />
                <TextField
                    id="outlined-taskId"
                    label="Task Id"
                    name="taskId"
                    onChange={handleChange}
                    multiline
                    value={taskFormData.taskId}
                />
            </div>
            <div>
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            name="startDate"
                            label="Start Date"
                            onChange={(date) => handleDateChange('startDate', date)}
                            value={taskFormData.startDate}
                        />
                    </DemoContainer>
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            label="End Date"
                            name="deadline"
                            onChange={(date) => handleDateChange('deadline', date)}
                            value={taskFormData.deadline}
                        />
                    </DemoContainer>
                </LocalizationProvider> */}
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
                        value={taskFormData.status}
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
                        value={taskFormData.priority}
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
                    value={taskFormData.assignedTo}
                />
                <TextField
                    id="outlined-relatedTo"
                    label="Related To"
                    name="relatedTo"
                    onChange={handleChange}
                    multiline
                    value={taskFormData.relatedTo}
                />
            </div>
            <div>
                <TextField
                    id="outlined-casePersonName"
                    label="Case Person Name"
                    name="casePersonName"
                    onChange={handleChange}
                    multiline
                    value={taskFormData.casePersonName}
                />
                <TextField
                    id="outlined-caseNumber"
                    label="Case Number"
                    name="caseNumber"
                    onChange={handleChange}
                    multiline
                    value={taskFormData.caseNumber}
                />
            </div>
            <div>
                <TextField
                    id="outlined-taskDescription"
                    label="taskDescription"
                    name="taskDescription"
                    onChange={handleChange}
                    multiline
                    value={taskFormData.taskDescription}
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
