import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Typography,
  Button,
  Autocomplete,
  TextField,
  ListItemAvatar,
  Avatar,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { modifiedProfileData } from "./fakeData";
import { fontSize } from "@mui/system";
import React from "react";

function Search() {
  const nav = useNavigate();
  const dummyData = ["CSS", "React", "JavaScript", "C", "Rust"];
  const [selectedVal, setValue] = useState("");
  const [selectedProfile, setProfile] = useState(modifiedProfileData);

  const handleSelection = (event, newVal) => {
    setValue(newVal);
  };

  //search profiles with the selected skills
  const getProfile = () => {
    let profiles = modifiedProfileData.filter((profile) =>
      profile.skills.includes(selectedVal)
    );
    setProfile(profiles);
  };

  const profileList = selectedProfile.map((profile) => (
    <ListItemButton
      key={profile.profile_id}
      href={`https://www.linkedin.com/in/${profile.profile_id}/`}
    >
      <ListItemAvatar>
        <Avatar
          sx={{ height: "45px", width: "45px" }}
          src={profile.profile_picture}
        ></Avatar>
      </ListItemAvatar>
      <Box>
        <ListItemText sx={{ margin: "0px" }}>
          <Typography sx={{ fontSize: "20px" }}>
            {profile.first_name} {profile.last_name}
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>{profile.job_title}</Typography>
        </ListItemText>
        <ListItemText>
          {profile.skills.map((skill) => (
            <Box
              key={skill}
              display="inline"
              sx={{
                backgroundColor: "#C8D7FF",
                marginRight: "4px",
                padding: "3px",
                borderRadius: "5px",
              }}
            >
              {skill}
            </Box>
          ))}
        </ListItemText>
      </Box>
    </ListItemButton>
  ));

  return (
    <div>
      <div className="">
        <Typography
          sx={{ textAlign: "left", fontSize: "20px", paddingBottom: "5px" }}
        >
          Ment2Be
        </Typography>
      </div>
      <div className="">
        <Autocomplete
          options={dummyData}
          renderInput={(params) => <TextField {...params} />}
          value={selectedVal}
          onChange={handleSelection}
          onSelect={getProfile}
          sx={{ padding: 4 }}
        />

        <List>{profileList}</List>
      </div>
    </div>
  );
}

export default Search;
