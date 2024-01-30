import React from "react";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const columns = [
  {
    name: "no",
    label: "CASE",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "name",
    label: "CLIENT NAME",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "description",
    label: "CASE DESCRIPTION",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "respondant",
    label: "RESPONDANT NAME",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "date",
    label: "HEARING DATE",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "comments",
    label: "COMMENTS",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: 'Status',
    label: "CASE STATUS",
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
const cookies = new Cookies();
const Case = () => {
  const [caseState, setCaseState] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/case', {
      method: 'GET',
      headers: {
        'token': cookies.get('token'),
      }
    }).then((res) => {
      return (res.json())
    }).then((data) => {
      console.log(data);
      setCaseState(data);
    });
  }, []);

  const data = caseState;
  
  return (
    <>
      <MUIDataTable
        title={"CASES"}
        data={data}
        columns={columns}
        options={options}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>

        <Stack spacing={2} direction="row">
          <Button variant="contained" component={Link} to="/Case" style={{ backgroundColor: "#141963" }}>
            ALL CASES
          </Button>
          <Button variant="contained" component={Link} to="/documents" style={{ backgroundColor: "#141963" }}>
            ALL DOCUMENTS
          </Button>
        </Stack>
      </div>
    </>
  );
};
export default Case;