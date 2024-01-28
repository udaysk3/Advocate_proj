import React from "react";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const columns = [
  {
    name: "no",
    label: "DOC.NO",
    options: {
     filter: true,
     sort: true,
    }
   },
 {
  name: "name",
  label: "Case DOCUMENT",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "description",
  label: "TAG DOCUMENT",
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

const data = [
 { no:"1",name: "Pooja Shetty", description: "Test Corp", respondant: "adv.abc", date: "3/1/202",comments:"hiring is on 3/1/2024",Status:" Inactive" },
 { no:"2",name: "Ram Sharma", description: "Test Desc", respondant: "adv.pqr", date: "27/7/2024",comments:"hiring is on 27/7/2024",Status:"Open " },
 
];

const options = {
  filterType: 'checkbox',
};

const Case = () => {

  const handleNextPage = () => {
    history.push('/fir'); // Replace '/next-page' with your desired route
  };
  return (
    <>
<MUIDataTable
  title={"DOCUMENTS"} 
  data={data}
  columns={columns}
  options={options}
/> 
<div style={{ textAlign: 'center', marginTop: '20px'}}>
        <Button variant="contained" component={Link} to = "/Fir"  onClick={handleNextPage} style={{ backgroundColor:"#141963" }}>
          Next Page
        </Button>
      </div>
    </>
  );
};
  export default Case;