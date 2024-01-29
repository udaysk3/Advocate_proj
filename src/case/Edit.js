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
    caseSubtype: '',
    actNumber: '',
    filingNumber: '',
    filingDate: '',
    caseStage: {
      closed: true,
      fir: false,
      pending: false,
    },
    caseSeverity: {
      low: true,
      high: false,
      medium: false,
    },
    firstHearingDate: '',
    nextHearingDate: '',
    // isPetitioner: false,y
    clientContactNumber: '',
    respondentContactNumber: '',
    fileList: [],
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
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
          id="caseSubtype"
          label="Case Subtype"
          value={formData.caseSubtype}
          onChange={handleChange}
          name="caseSubtype"
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
        <TextField
          id="filingDate"
          label="Filing Date"
          value={formData.filingDate}
          onChange={handleChange}
          name="filingDate"
          maxRows={2}
        />

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
              control={<Checkbox checked={formData.caseStage.closed} onChange={handleChange} name="caseStage.closed" />}
              label="Closed"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.caseStage.fir} onChange={handleChange} name="caseStage.fir" />}
              label="FIR"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.caseStage.pending} onChange={handleChange} name="caseStage.pending" />}
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
              control={<Checkbox checked={formData.caseSeverity.low} onChange={handleChange} name="caseSeverity.low" />}
              label="Low"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.caseSeverity.high} onChange={handleChange} name="caseSeverity.high" />}
              label="High"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.caseSeverity.medium} onChange={handleChange} name="caseSeverity.medium" />}
              label="Medium"
            />
          </FormGroup>
        </FormControl>
      </Box>

      {/* Hearing Dates Section */}
      <div>
        <TextField
          id="firstHearingDate"
          label="First Hearing Date"
          value={formData.firstHearingDate}
          onChange={handleChange}
          name="firstHearingDate"
          maxRows={2}
        />
        <TextField
          id="nextHearingDate"
          label="Next Hearing Date"
          value={formData.nextHearingDate}
          onChange={handleChange}
          name="nextHearingDate"
        />
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
          to="/ufir" state={{
            formData: {
              ...formData,
              caseStage: Object.keys(formData.caseStage)
                .filter((key) => formData.caseStage[key])[0],
              caseSeverity: Object.keys(formData.caseSeverity)
                .filter((key) => formData.caseSeverity[key])[0]
            }
          }}
          style={{ backgroundColor: '#141963', textAlign: 'center', marginTop: '24px' }}
        >
          Next Page
        </Button>
      </div>
    </Box>
  );

};

export default Form;

