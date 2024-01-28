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

const DropFileInput = () => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

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
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  return (
    <>
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
       ref={anchorRef}
       id="composition-button"
       aria-controls={open ? 'composition-menu' : undefined}
       aria-expanded={open ? 'true' : undefined}
       aria-haspopup="true"
       onClick={handleToggle}
       sx={{
        backgroundColor: rgb(0,0,71)
      }}
     >
       Type Of Document
     </Button>
     <Popper
       open={open}
       anchorEl={anchorRef.current}
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
                 <MenuItem onClick={handleClose}>Sales</MenuItem>
                 <MenuItem onClick={handleClose}>Paper</MenuItem>
                 <MenuItem onClick={handleClose}>Random</MenuItem>
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
    </>
  );
};

DropFileInput.propTypes = {
 // onFileChange: PropTypes.func // Ensure onFileChange is a required function prop
};

export default DropFileInput;
