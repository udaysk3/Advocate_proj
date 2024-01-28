import React from "react";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { Link } from 'react-router-dom';


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
  name: "task",
  label: "TASK",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "related to",
  label: "RELATED TO",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "start date",
  label: "START DATE",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "deadline",
  label: "DEADLINE",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "members",
  label: "MEMBERS",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: 'Status',
  label: "STATUS",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: 'priority',
  label: "PRIORITY",
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
  title={"TASK MANAGEMENT"}
  columns={columns}
  options={options}
/> 
<Stack spacing={2} direction="row">
<Button  variant="contained"  component={Link} to = "/Tform" style={{ backgroundColor:"#141963" ,textAlign:"center",marginTop:"84px" }} >
        ADD TASK
</Button>
<Button  variant="contained"  component={Link} to = "/Team" style={{ backgroundColor:"#141963" ,textAlign:"center",marginTop:"84px" }} >
        ADD TEAM MEMBERS
</Button>
</Stack>




    </>
  );
};
  export default Work;