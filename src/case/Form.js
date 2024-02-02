import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Form = ({ title }) => {
  const [formData, setFormData] = React.useState({
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

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDateChange = (name, date) => {
    const selectedDate = date instanceof Date ? date : new Date(date);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedDate,
    }));
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

      {/* Client Details Section */}
      <div>
        <TextField
          id="clientName"
          label="Client Full Name"
          value={formData.clientName}
          onChange={handleChange}
          name="clientName"
          maxRows={2}
        />
        {/* <FormControlLabel
          control={<Checkbox checked={formData.isPetitioner} onChange={handleChange} name="isPetitioner" />}
          label="Petitioner"
        />
        <FormControlLabel
          control={<Checkbox checked={formData.isRespondent} onChange={handleChange} name="isRespondent" />}
          label="Respondent"
        /> */}

        


        <TextField
          id="clientContactNumber"
          label="Client Contact Number"
          value={formData.clientContactNumber}
          onChange={handleChange}
          name="clientContactNumber"
        />
        <TextField
          id="respondentName"
          label="Respondent Full Name"
          value={formData.respondentName}
          onChange={handleChange}
          name="respondentName"
        />
          </div>
          <div>
        <TextField
          id="respondentContactNumber"
          label="Respondent Contact Number"
          value={formData.respondentContactNumber}
          onChange={handleChange}
          name="respondentContactNumber"
        />

      {/* Advocate Details Section */}
        <TextField
          id="respondentSeniorAdvocateName"
          label="Respondent Senior Advocate Name"
          value={formData.respondentSeniorAdvocateName}
          onChange={handleChange}
          name="respondentSeniorAdvocateName"
        />
        <TextField
          id="respondentJuniorAdvocateOneName"
          label="Respondent Junior Advocate 1"
          value={formData.respondentJuniorAdvocateOneName}
          onChange={handleChange}
          name="respondentJuniorAdvocateOneName"
        />
          </div>
          <div>
        <TextField
          id="respondentJuniorAdvocateTwoName"
          label="Respondent Junior Advocate 2"
          value={formData.respondentJuniorAdvocateTwoName}
          onChange={handleChange}
          name="respondentJuniorAdvocateTwoName"
        />

      {/* Case Details Section */}
       
        <TextField
          id="caseType"
          label="Case Type"
          value={formData.caseType}
          onChange={handleChange}
          name="caseType"
        />
        <TextField
          id="caseSubType"
          label="Case Subtype"
          value={formData.caseSubType}
          onChange={handleChange}
          name="caseSubType"
          maxRows={2}
          />
      </div>

      {/* Additional Case Information Section */}
          <div>
        <TextField
          id="actNumber"
          label="Act Number"
          value={formData.actNumber}
          onChange={handleChange}
          name="actNumber"
          maxRows={2}
        />
        <TextField
          id="filingNumber"
          label="Filing Number"
          value={formData.filingNumber}
          onChange={handleChange}
          name="filingNumber"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label="Filing Date"
              name="filingDate"
              onChange={(date) => handleDateChange('filingDate', date)}
            />
          </DemoContainer>
        </LocalizationProvider>

          </div>
      {/* Stage and Severity Section */}
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

      {/* Hearing Dates Section */}
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label="First Hearing Date"
              name="firstHearingDate"
              onChange={(date) => handleDateChange('firstHearingDate', date)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label="Next Hearing Date"
              name="nextHearingDate"
              onChange={(date) => handleDateChange('nextHearingDate', date)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>

      {/* Comments and Case Description Section */}
      <div>
        <TextField
          id="comments"
        label="Add comments"
        value={formData.comments}
        onChange={handleChange}
        name="comments"
        maxRows={2}
        />
        <TextField
          id="caseDescription"
          label="Add Case Description"
          value={formData.caseDescription}
          onChange={handleChange}
          name="caseDescription"
          maxRows={2}
        />
      </div>

      {/* Submit Button */}
      <div>
        <Button
          variant="contained"
          component={Link}
          to="/fir" state={{
            formData: {
              ...formData,
              caseStage: Object.keys(formData.caseStage)
                .filter((key) => formData.caseStage[key])[0],
              caseSeverity: Object.keys(formData.caseSeverity)
                .filter((key) => formData.caseSeverity[key])[0]
            } }}
          style={{ backgroundColor: '#141963', textAlign: 'center', marginTop: '24px' }}
        >
          Next Page
        </Button>
      </div>
    </Box>
  );
};

export default Form;



