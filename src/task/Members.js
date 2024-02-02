import React from "react";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';





const Work = () => {
  const cookies = new Cookies();

  const [teamMember, setTeamMember] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/v1/8d3531d1-6a1c-4b00-adfd-76d5823bb6f3/teammember', {
      method: 'GET',
      headers: {
        'token': cookies.get('token'),
      }
    }).then((res) => {
      return (res.json())
    }).then((data) => {
      console.log(data);
      console.log(112);

      setTeamMember(data);
    });
  }, []);


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

  const data = teamMember

  return (
    <>
      <MUIDataTable
        title={"TEAM MEMBERS"}
        columns={columns}
        options={options}
        data={data}
      />

    </>
  );
};
export default Work;