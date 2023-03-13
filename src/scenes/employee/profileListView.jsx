import {Box, Button, Typography } from "@mui/material";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {tokens} from "../../theme";
import {mockDataContacts} from "../../data/mockData";
import Header from "../../components/Header";
import { boxSizing, color } from "@mui/system";
import {useTheme} from "@mui/material";
import axios from "axios"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useNavigate} from 'react-router-dom';
import StatBox from "../../components/StatBox";


const ProfileListView = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [mapping,setMapping] = useState([])
    const datas = [{
      name: "vishnu prakash",
      designation: "software developer"
    },{
      name: "roshini",
      designation: "frontend developer"
    },{
      name: "sruthi",
      designation: "backend developer"
    },{
      name: "kamal",
      designation: "frontend developer"
    },{
      name: "venkat",
      designation: "data engineer"
    },{
      name: "dharshan",
      designation: "data engineer"
    },{
      name: "bharathi",
      designation: "Backend Developer"
    },]

    return (
    <Box m="20px">
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="150px"
            gap="10px"
        >
            <Box
              gridColumn="span 12"
              backgroundColor={colors.navbar[100]}
              display="flex"
              alignItems="center"
              borderRadius="10px"
              padding="20px 20px 20px 20px"
              justifyContent="space-between">
                <Box paddingTop="20px">
                 <Header title="EMPLOYEES" 
            
                    subtitle="Employees in organization"/>
                </Box>
                <Box>
                <Button type="button" color="secondary" variant="contained"
                >
                    ADD EMPLOYEE
                </Button >
                </Box>

              </Box>
            {/* row 1*/}
            {datas.map((item) => {
              return(
                <Box
              gridColumn="span 3"
              backgroundColor={colors.navbar[100]}
              display="flex"
              alignItems="center"
              borderRadius="10px"
              justifyContent="flex-start"
              sx={{
                '&:hover': {
                  boxShadow: 3,
                }
              }}
              
              >
                <Box>
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={require('../../assets/rosee.jpg')}
                  style={{ cursor:"pointer", borderRadius: "50%" ,margin:"15px"}}
                  /></Box>
                  <Box >
                  <Typography
                      varient="h2"
                      color={colors.grey[100]}
                      fontWeight="bold"
                      fontSize="17px"
                      sx={{m: "0 0 0 0"}}
                      >{item.name}</Typography>
                  <Typography varient = "h5" color={colors.greenAccent[500]}>
                      {item.designation}
                  </Typography>
                  </Box>
              </Box>
              )
            })}
            
              
        </Box>
    </Box>);
        
};


export default ProfileListView;