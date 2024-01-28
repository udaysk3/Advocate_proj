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

  const [state, setState] = React.useState({
    Closed: true,
    FIR: false,
    Pending: false,
    Low: true,
    High: false,
    Medium: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { Closed, FIR, Pending, Low,High,Medium } = state;
  
  
  return (
   
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '39ch'},
      }}
      noValidate
      autoComplete="on"
    >
      <h2>{title}</h2>
     
      <h1  style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}> EDIT CASES</h1>
      <div>
        <TextField
          id="outlined- -flexible"
          label="Client Full Name"
          maxRows={2}
        />  
        <FormControlLabel control={<Checkbox  />} label="Petitionar" />
        <FormControlLabel control={<Checkbox/>} label="Respondant" />
        <TextField
          id="outlined-textarea"
          label="Respondant Full Name"
        />
      
      </div>
      <div>
      <TextField
          id="outlined- -flexible"
          label="Respondant Senior Advocate Name"
           
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Respondant Junior Advocate 1"
           
          />
        <TextField
          id="outlined- -flexible"
          label="Respondant Junior Advocate 2"
           
          maxRows={2}
        />
       
      </div>
      <div>
      <TextField
          id="outlined- -flexible"
          label="Case Number"
           
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Case Type"
           
        />
        <TextField
          id="outlined- -flexible"
          label="Case Subtype"
           
          maxRows={2}
        />
    
      </div>
      <div>
      <TextField
          id="outlined- -flexible"
          label="Act Number"
           
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Filing Number"
           
        />
        <TextField
          id="outlined- -flexible"
          label="Filing date"
           
          maxRows={2}
        />
      </div>


    <Box sx={{ display: 'flex' }} >
 
      <FormControl 
  
        component="fieldset"
        sx={{ m: 3, display: 'flex' } }
        variant="standard"
      >
       
        <FormGroup >
        <FormLabel component="legend" >Stage Of the case</FormLabel>
          <FormControlLabel sx={{ display: 'flex' }} 
            control={
              <Checkbox checked={Closed} onChange={handleChange} name="Closed" />
            }
            label="Closed"
          />
          <FormControlLabel
            control={
              <Checkbox checked={FIR} onChange={handleChange} name="FIR" />
            }
            label="FIR"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Pending} onChange={handleChange} name="Pending" />
            }
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
            control={
              <Checkbox checked={Low} onChange={handleChange} name="Low" />
            }
            label="Low"
          />
          <FormControlLabel
            control={
              <Checkbox checked={High} onChange={handleChange} name="High" />
            }
            label="High"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Medium} onChange={handleChange} name="Medium" />
            }
            label="Medium"
          />
        </FormGroup>
      </FormControl>
    </Box>

  
      <div>  
      <TextField
          id="outlined- -flexible"
          label="First Hearing Date"
           
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Next Hearing Date"
           
        />
       
      </div>
      <div >
      <TextField
          id="outlined- -flexible"
          label="Add comments"
           
          maxRows={2}
        />

      </div>
      <div>
      <TextField  
    
          id="outlined- -flexible"
          label="Add Case Description"
           
          maxRows={2}
  
        />    
        <Button  variant="contained"  component={Link} to = "/Ufir" style={{ backgroundColor:"#141963" ,textAlign:"center",marginTop:"84px" }} >
        Next Page
       </Button>



      </div>
    </Box>
    
  );

};

export default Form;

