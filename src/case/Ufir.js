import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const Fir = ( ) => { 
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '61ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <h1  style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}> UPDATE FIR Details</h1>
      <div>
        <TextField  
          id="outlined- -flexible"
          label="Police Station"
           
          maxRows={2}
        />    
      </div>
      <div>
        <TextField
          id="outlined- -flexible"
          label="FIR Number"
           
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="FIR Date"
           
        />
      </div>
      <div>
        <TextField
          id="outlined- -flexible"
          label="Court Number"
           
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Case Number"
           
        />
      </div>
      <div>
        <TextField
          id="outlined- -flexible"
          label="Court Type"
           
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Court Name"
           
        />
      </div>
      <div>
        <TextField
          id="outlined- -flexible"
          label="Judge Post"
           
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Judge Name"
           
        />
      </div>
      <div>
        {/* Your upload component */}
        <Stack spacing={2} direction="row">
        <Button variant="contained" style={{ backgroundColor:"#141963" }} component={Link} to = "/Edit"> 
          ADD DATA
        </Button>
        <Button variant="contained" style={{ backgroundColor:"#141963" }} component={Link} to = "/"> 
          UPLOAD DOCUMENT
        </Button>
        </Stack>
      </div>
      <div>
        {/* Button for adding data */}
     
      </div>
    </Box>
  );
};

export default Fir;
