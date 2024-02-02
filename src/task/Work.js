import React from "react";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';





const Work = () => {

  const cookies = new Cookies();

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/api/v1/task/${id}`, {
      method: 'DELETE',
      headers: {
        'token': cookies.get('token'),
      },
    }).then((data) => {
      console.log(data);
      window.location.reload();
    });
  }


  const [taskState, setTaskState] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/task', {
      method: 'GET',
      headers: {
        'token': cookies.get('token'),
      }
    }).then((res) => {
      return (res.json())
    }).then((data) => {
      console.log(data);
      setTaskState(data);
    });
  }, []);

  const data = taskState;



  const columns = [
    {
      name: "taskId",
      label: "NO",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "subject",
      label: "TASK",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "relatedTo",
      label: "RELATED TO",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "startDate",
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
      name: "assignedTo",
      label: "MEMBERS",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: 'status',
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
        customBodyRenderLite: (rowData) => (

          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="delete" size="large" onClick={() => handleDelete(taskState[rowData]._id)}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="FileOpen" size="large">
              <FileOpenIcon fontSize="inherit" />
            </IconButton>
            <Button
              variant="contained"
              component={Link}
              to='/Eform'
              state={{
                _id: taskState[rowData]._id,
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



  const options = {
    filterType: 'checkbox',
  };


  return (
    <>
      <MUIDataTable
        title={"TASK MANAGEMENT"}
        data={data}
        columns={columns}
        options={options}
      />
      <Stack spacing={2} direction="row">
        <Button variant="contained" component={Link} to="/Tform" style={{ backgroundColor: "#141963", textAlign: "center", marginTop: "84px" }} >
          ADD TASK
        </Button>
        <Button variant="contained" component={Link} to="/Team" style={{ backgroundColor: "#141963", textAlign: "center", marginTop: "84px" }} >
          ADD TEAM MEMBERS
        </Button>
      </Stack>




    </>
  );
};
export default Work;