import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { useLocation } from "react-router-dom";

const Fir = ( ) => { 
 const location = useLocation();
  const { formData } = location.state;
  var postData = { ...formData }
  console.log(formData)
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

  const handleSubmit = () => {
    // Access the form data in the firData object
      postData = { ...postData, ...firData }
    
    fetch('http://127.0.0.1:8000/api/v1/case', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJjNTliYzUxOS05NmJkLTQ0YTQtYjJkNi03ODlhNTk4MmRhMjEiLCJlbWFpbCI6InB1dnZ1bGFzYWlnb3d0aGFtQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcwNjUxOTY2MSwiZXhwIjoxNzA2NTIzMjYxfQ.NVdOEBFDpbG2q8pBMotYdRxFjCf7DOMLrSD8rqVj_1E'
        },
        body: {
          "caseNumber": "CASE123",
          "clientName": "Client ABC",
          "clientContactNumber": "+1234567890",
          "caseDescription": "Description of the case...",
          "respondentName": "Respondent XYZ",
          "respondentContactNumber": "+9876543210",
          "respondentSeniorAdvocateName": "Senior Advocate PQR",
          "respondentJuniorAdvocateOneName": "Junior Advocate JKL",
          "respondentJuniorAdvocateTwoName": "Junior Advocate MNO",
          "comments": [
            "Comment 1",
            "Comment 2"
          ],
          "caseStatus": "OPEN",
          "caseType": "Civil",
          "caseSubType": "Property Dispute",
          "actNumber": "Act123",
          "filingNumber": "FILING123",
          "filingDate": "2023-01-15T00:00:00.000Z",
          "caseStage": "PENDING",
          "caseSeverity": "MEDIUM",
          "firstHearingDate": "2023-02-01T10:00:00.000Z",
          "nextHearingDate": "2023-03-01T10:00:00.000Z",
          "policeStation": "City Police Station",
          "FIRnumber": "FIR123",
          "FIRdate": "2023-01-10T00:00:00.000Z",
          "courtNumber": "Court123",
          "courtType": "HIGHCOURT",
          "judgePost": "District Judge",
          "judgeName": "Judge ABC",
          "fileList": [
            {
              "path": "/path/to/file1",
              "tag": "Document",
              "_id": "658c611f644846597987a755"
            },
            {
              "path": "/path/to/file2",
              "tag": "Evidence",
              "_id": "658c611f644846597987a756"
            }
          ]
        }
      
      });
console.log(1)
    
    

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

      {/* Court Type and Court Name */}
      <div>
        <TextField
          id="outlined-flexible"
          label="Court Type"
          name="courtType"
          value={firData.courtType}
          onChange={handleChange}
          maxRows={2}
        />
        <TextField
          id="outlined-flexible"
          label="Case Status"
          name="caseStatus"
          value={firData.caseStatus}
          onChange={handleChange}
          maxRows={2}
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
