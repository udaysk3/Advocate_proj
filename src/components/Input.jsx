import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input() {
  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '88ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <h1  style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}> DOCUMENT MANAGEMENT</h1>
      <TextField
          required
          id="outlined-required"
          label="Case Document"
          defaultValue=""
        />
        </div>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Tag a Document"
          defaultValue=""
        />
       
       
      </div>
    </Box>
  );
}