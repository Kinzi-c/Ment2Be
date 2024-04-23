import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";

function About() {
  const nav = useNavigate();

  return (
    <>
      <Box>
        <Typography>About</Typography>
        <Button onClick={() => nav("/signup")}>Go to Sign Up</Button>
      </Box>
    </>
  );
}

export default About;
