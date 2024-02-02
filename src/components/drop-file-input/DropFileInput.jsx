import React, { useRef, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import './drop-file-input.css';
import { ImageConfig } from '../../config/ImageConfig';
import uploadImg from '../../assets/cloud-upload-regular-240.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const DropFileInput = () => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);
  const [open, setOpen] = useState(false);

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

  const onDrop = () => wrapperRef.current.classList.remove('dragover');

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile && newFile.type === 'application/pdf') {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
    } else {
      console.log('Please upload a PDF file.');
    }
  };

  const fileRemove = (file) => {
    const updatedList = fileList.filter((item) => item !== file);
    setFileList(updatedList);
  };

  const handleRemoveKeyDown = (event, file) => {
    if (event.key === 'Enter' || event.key === ' ') {
      fileRemove(file);
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const handleCompositionSelect = (composition) => {
    // Handle the selected composition (e.g., set it in state)
    console.log('Selected Composition:', composition);
    setOpen(false);
  };







  const handleUpload = () => {
    // Handle the file upload logic here
    console.log('Uploading Files:', fileList);
    // You can perform additional actions like sending files to a server here
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '88ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <h1 style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}> DOCUMENT MANAGEMENT</h1>
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
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
        </div>
        <input type="file" value="" onChange={onFileDrop} accept=".pdf" />
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Ready to upload</p>
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <img
                src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']}
                alt=""
              />
              <div className="drop-file-preview__item__info">
                <p>{item.name}</p>
                <p>{item.size}B</p>
              </div>
              <button
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}
                onKeyDown={(e) => handleRemoveKeyDown(e, item)}
                tabIndex={0}
              >
                x
              </button>
              <Stack direction="row" spacing={5}>
                <div>
                  <Button
                    ref={wrapperRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    sx={{
                      backgroundColor: "rgb(0, 0, 71)"
                    }}
                  >
                    Type Of Document
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={wrapperRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={() => handleCompositionSelect('Sales')}>Sales</MenuItem>
                              <MenuItem onClick={() => handleCompositionSelect('Paper')}>Paper</MenuItem>
                              <MenuItem onClick={() => handleCompositionSelect('Random')}>Random</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </Stack>
            </div>
          ))}
        </div>
      ) : null}
      <Button
        variant="contained"
        onClick={handleUpload}
        style={{ textAlign: 'center', marginLeft: '312px', backgroundColor: "#141963" }}
      >
        Upload Files
      </Button>
    </>
  );
};

export default DropFileInput;
