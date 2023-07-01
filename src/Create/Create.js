import React from 'react';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export default function Create() {


  return (
    <div className='create'>
      <div className="create-item">
        <div className="row-top">
          <div className="left-icon">
            <MoreHorizTwoToneIcon />
          </div>
          <div className="right-buttons">
            <ButtonGroup>
              <DropdownButton
                variant="secondary"
                title="Board"
                id="bg-nested-dropdown"
              >
                <Dropdown.Item eventKey="1">Board 1</Dropdown.Item>
                <Dropdown.Item eventKey="2">Board 2</Dropdown.Item>
              </DropdownButton>

              <Button variant="danger">Save</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="row pt-4 row-bottom">
          <div className="col-5 left-bottom-part">
            <Box
              className
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height={550}
              bgcolor="#f5f5f5"
              border="2px Solid #bdbdbd"
              borderRadius={4}
              p={2}
            >
              <CloudUploadOutlinedIcon sx={{ fontSize: 48, mb: 1 }} />
              <Typography variant="h6" color="textSecondary" align="center">
                Drag and Drop or Upload Image Here
              </Typography>
            </Box>
            <div className="input-with-arrow">
              <input
              className='input-field'
                type="text"
                placeholder="Enter your image Link"
              />
                <ArrowForwardIcon className="arrow-icon" />      
            </div>
          </div>
          <div className="col-7 right-bottom-part">
            <input type="text" placeholder='Add your title' className="input-text-size" />
            <div className='logo-a-name'> UserName</div>
            <input type="text" placeholder='tell everyone what your pin is about' className="input-text-description" />
            <input type="text" placeholder='Add destination link' className="input-text-destination" />
          </div>
        </div>
      </div>
    </div>
  )
}
