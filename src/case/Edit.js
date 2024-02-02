import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Cookies from 'universal-cookie';
import { useLocation } from 'react-router-dom';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link } from 'react-router-dom';

const cookies = new Cookies();

const Form = ({ title }) => {
  const location = useLocation();
  const { _id } = location.state;

  const [formData, setFormData] = useState({
    clientName: '',
    caseDescription: '',
    respondentName: '',
    respondentSeniorAdvocateName: '',
    respondentJuniorAdvocateOneName: '',
    respondentJuniorAdvocateTwoName: '',
    comments: '',
    caseType: '',
    caseSubType: '',
    actNumber: '',
    filingNumber: '',
    filingDate: '',
    caseStage: {
      CLOSED: true,
      FIR: false,
      PENDING: false,
    },
    caseSeverity: {
      LOW: true,
      HIGH: false,
      MEDIUM: false,
    },
    firstHearingDate: '',
    nextHearingDate: '',
    clientContactNumber: '',
    respondentContactNumber: '',
    fileList: [],
    policeStation: '',
    FIRnumber: '',
    FIRDate: '',
    courtNumber: '',
    caseNumber: '',
    courtType: '',
    judgePost: '',
    judgeName: '',
    caseStatus: '',
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/v1/case/${_id}`, {
      method: 'GET',
      headers: {
        'token': cookies.get('token'),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // Prefill the form data with fetched data
        setFormData({
          ...formData,
          ...data,
          caseStage: { ...formData.caseStage, ...data.caseStage },
          caseSeverity: { ...formData.caseSeverity, ...data.caseSeverity },
        });
      });
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // const handleDateChange = (name, date) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: date,
  //   }));
  // };

  const handleSubmit = () => {
    // Handle form submission if needed
    // You can access the form data from the formData state
    console.log(formData);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '34ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <h2>{title}</h2>

      <h1 style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}>
        Add Client & Case Details
      </h1>

      <div>
        <TextField
          id="clientName"
          label="Client Full Name"
          value={formData.clientName || ''}
          onChange={handleChange}
          name="clientName"
          maxRows={2}
        />

        <TextField
          id="clientContactNumber"
          label="Client Contact Number"
          value={formData.clientContactNumber || ''}
          onChange={handleChange}
          name="clientContactNumber"
        />
        <TextField
          id="respondentName"
          label="Respondent Full Name"
          value={formData.respondentName || ''}
          onChange={handleChange}
          name="respondentName"
        />
      </div>
      <div>
        <TextField
          id="respondentContactNumber"
          label="Respondent Contact Number"
          value={formData.respondentContactNumber || ''}
          onChange={handleChange}
          name="respondentContactNumber"
        />

        <TextField
          id="respondentSeniorAdvocateName"
          label="Respondent Senior Advocate Name"
          value={formData.respondentSeniorAdvocateName || ''}
          onChange={handleChange}
          name="respondentSeniorAdvocateName"
        />
        <TextField
          id="respondentJuniorAdvocateOneName"
          label="Respondent Junior Advocate 1"
          value={formData.respondentJuniorAdvocateOneName || ''}
          onChange={handleChange}
          name="respondentJuniorAdvocateOneName"
        />
      </div>
      <div>
        <TextField
          id="respondentJuniorAdvocateTwoName"
          label="Respondent Junior Advocate 2"
          value={formData.respondentJuniorAdvocateTwoName || ''}
          onChange={handleChange}
          name="respondentJuniorAdvocateTwoName"
        />

        <TextField
          id="caseType"
          label="Case Type"
          value={formData.caseType || ''}
          onChange={handleChange}
          name="caseType"
        />
        <TextField
          id="caseSubType"
          label="Case Subtype"
          value={formData.caseSubType || ''}
          onChange={handleChange}
          name="caseSubType"
          maxRows={2}
        />
      </div>

      <div>
        <TextField
          id="actNumber"
          label="Act Number"
          value={formData.actNumber || ''}
          onChange={handleChange}
          name="actNumber"
          maxRows={2}
        />
        <TextField
          id="filingNumber"
          label="Filing Number"
          value={formData.filingNumber || ''}
          onChange={handleChange}
          name="filingNumber"
        />
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Filing Date"
              name="filingDate"
              value={formData.filingDate}
              onChange={(date) => handleDateChange('filingDate', date)}
            />
          </DemoContainer>
        </LocalizationProvider> */}
      </div>

      <Box sx={{ display: 'flex' }}>
        <FormControl
          component="fieldset"
          sx={{ m: 3, display: 'flex' }}
          variant="standard"
        >
          <FormGroup>
            <FormLabel component="legend">Stage Of the case</FormLabel>
            <FormControlLabel
              control={<Checkbox checked={formData.caseStage.CLOSED} onChange={handleChange} name="caseStage.CLOSED" />}
              label="Closed"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.caseStage.FIR} onChange={handleChange} name="caseStage.FIR" />}
              label="FIR"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.caseStage.PENDING} onChange={handleChange} name="caseStage.PENDING" />}
              label="Pending"
            />
          </FormGroup>
        </FormControl>
        <FormControl
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
        >
          <FormGroup>
            <FormLabel component="legend">Severity Of the case</FormLabel>
            <FormControlLabel
              control={<Checkbox checked={formData.caseSeverity.LOW} onChange={handleChange} name="caseSeverity.LOW" />}
              label="Low"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.caseSeverity.HIGH} onChange={handleChange} name="caseSeverity.HIGH" />}
              label="High"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.caseSeverity.MEDIUM} onChange={handleChange} name="caseSeverity.MEDIUM" />}
              label="Medium"
            />
          </FormGroup>
        </FormControl>
      </Box>

      <div>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="First Hearing Date"
              name="firstHearingDate"
              value={formData.firstHearingDate}
              onChange={(date) => handleDateChange('firstHearingDate', date)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Next Hearing Date"
              name="nextHearingDate"
              value={formData.nextHearingDate}
              onChange={(date) => handleDateChange('nextHearingDate', date)}
            />
          </DemoContainer>
        </LocalizationProvider> */}
      </div>

      <div>
        <TextField
          id="comments"
          label="Add comments"
          value={formData.comments || ''}
          onChange={handleChange}
          name="comments"
          maxRows={2}
        />
        <TextField
          id="caseDescription"
          label="Add Case Description"
          value={formData.caseDescription || ''}
          onChange={handleChange}
          name="caseDescription"
          maxRows={2}
        />
      </div>

      <div>
        <Button
          variant="contained"
          component={Link}
          to="/ufir"
          state={{
            formData: {
              ...formData,
              caseStage: Object.keys(formData.caseStage).find((key) => formData.caseStage[key]),
              caseSeverity: Object.keys(formData.caseSeverity).find((key) => formData.caseSeverity[key]),
            },
          }}
          style={{ backgroundColor: '#141963', textAlign: 'center', marginTop: '24px' }}
          onClick={handleSubmit}
        >
          Next Page
        </Button>
      </div>
    </Box>
  );
};

export default Form;
