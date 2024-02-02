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

  const handleDelete = (_id) => {
    // const data = new FormData(event.currentTarget);
    fetch(`http://127.0.0.1:8000/api/v1/case/${_id}`, {
      method: 'DELETE',
      headers: {
        'token': cookies.get('token'),
      },
    }).then((data) => {
      console.log(data)
    });
    
  }

  const data = caseState;


  const columns = [
    {
      name: "caseNumber",
      label: "CASE",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "clientName",
      label: "CLIENT NAME",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "caseDescription",
      label: "CASE DESCRIPTION",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "respondentName",
      label: "RESPONDANT NAME",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "firstHearingDate",
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
      name: 'caseStatus',
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
        customBodyRenderLite: (rowData) => (

          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="delete" size="large" onClick={() => handleDelete(caseState[rowData]._id)}>
              <DeleteIcon fontSize="inherit"  />
            </IconButton>
            <IconButton aria-label="FileOpen" size="large">
              <FileOpenIcon fontSize="inherit" />
            </IconButton>
            <Button
              variant="contained"
              component={Link}
              to='/edit' 
              state={{
                _id: caseState[rowData]._id,
              }}
              color="success"
            >
              View
            </Button>
          </Stack>

        )
      },

    },

  ];
  
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