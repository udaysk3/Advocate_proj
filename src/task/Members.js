import React from "react";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FileOpenIcon from '@mui/icons-material/FileOpen';



const columns = [
  {
    name: "no",
    label: "NO",
    options: {
     filter: true,
     sort: true,
    }
   },
 {
  name: "first name",
  label: "FIRST NAME",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "last name",
  label: "LAST NAME",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "email",
  label: "EMAIL",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "mobile number",
  label: "MOBILE NUMBER",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "address",
  label: "ADDRESS",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: 'date',
  label: "DATE",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: 'actions',
  label: "ACTIONS",
  options: {
    filter: false,
    sort: false,
    customBodyRenderLite: () => (

    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="FileOpen" size="large">
        <FileOpenIcon fontSize="inherit" />
      </IconButton>
      <Button variant="contained" color="success">
        View
      </Button>
    </Stack>
  
    )
  },
  
 },
 
];



const options = {
  filterType: 'checkbox',
};

const Work = () => {

  
  return (
    <>
<MUIDataTable
  title={"TEAM MEMBERS"}
  columns={columns}
  options={options}
/> 

    </>
  );
};
  export default Work;