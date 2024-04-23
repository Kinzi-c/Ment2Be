import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SignUp() {
  const nav = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <Box sx={{display:"flex", alignItems:"left"}}>
        <Button onClick={() => nav("/")}>Back</Button>
      </Box>
      <div className="flex flex-col h-screen items-center justify-center">
        <Box sx={{marginBottom:"20px"}}>
          <Box sx={{marginBottom:"10px"}}>
            <Typography display="inline" sx={{fontWeight:"bold", fontSize:"20px"}}>Welcome to Ment</Typography>
            <Typography display="inline" sx={{fontWeight:"bold", color:"#9976FF", fontSize:"20px"}}>2Be!</Typography>
          </Box>
          <Typography>a platform for students to find their mentors to collaborate and connect. </Typography>
        </Box>
        <div className="absolute bottom-0">
          <Button sx={{backgroundColor:"#1568BF", color:"white", padding:"10px"}} onClick={() => nav("/profile-form")}>
            <LinkedInIcon fontSize="large" sx={{marginRight:"5px"}}/>
            <Typography>Sign In with Linkedin</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;