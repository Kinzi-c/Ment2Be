import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  CardMedia,
} from "@mui/material";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { modifiedProfileData } from "./fakeData.js";

countries.registerLocale(enLocale);

const GENDERS = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Non-binary", label: "Non-binary" },
];

const ROLES = [
  { value: "Mentor", label: "Mentor" },
  { value: "Mentee", label: "Mentee" },
];

function ProfileSetup() {
  const nav = useNavigate();
  const [role, setRole] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const profile = modifiedProfileData[0];

  const [firstName, setFirstName] = React.useState(profile.first_name);
  const [lastName, setLastName] = React.useState(profile.last_name);
  const [email] = React.useState(profile.email);
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  return (
    <>
      <Box sx={{ padding: 4 }}>
        <Box sx={{ position: "relative", textAlign: "center", mb: 3 }}>
          <Button
            onClick={() => nav("/signup")}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 30 }}
              image="arrow-left.png"
              alt="Live from space album cover"
            />
          </Button>
          <Typography variant="h3" gutterBottom>
            Profile
          </Typography>
        </Box>
        <Box component="form" noValidate autoComplete="off">
          <AvatarSection />
          <InfoFields
            role={role}
            setRole={setRole}
            gender={gender}
            setGender={setGender}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            countryArr={countryArr}
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => nav("/search")}
              fullWidth
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

function AvatarSection() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <Avatar alt="Avatar" sx={{ width: 130, height: 130 }}>
        
      </Avatar>
    </Box>
  );
}

function InfoFields({
  role,
  setRole,
  gender,
  setGender,
  selectedCountry,
  setSelectedCountry,
  countryArr,
  firstName,
  lastName,
  email,
}) {
  return (
    <Box>
      <TextField
        fullWidth
        required
        id="first-name"
        label="First Name"
        //  defaultValue={firstName}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        required
        id="last-name"
        label="Last Name"
        //defaultValue={lastName}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        disabled
        id="email"
        label="E-mail"
        defaultValue={email}
        sx={{ mb: 2 }}
      />
      <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 2 }}>
        <SelectField
          id="gender-select"
          labelId="gender-select-label"
          label="Gender"
          value={gender}
          onChange={setGender}
          options={GENDERS}
        />
        <SelectField
          id="role-select"
          labelId="role-select-label"
          label="Role"
          value={role}
          onChange={setRole}
          options={ROLES}
        />
      </Box>
      <TextField
        fullWidth
        required
        id="institution"
        label="Institution"
        defaultValue=""
        sx={{ mb: 2 }}
      />
      <SelectField
        id="country-select"
        labelId="country-select-label"
        label="Country"
        value={selectedCountry}
        onChange={setSelectedCountry}
        options={countryArr}
      />
    </Box>
  );
}

function SelectField({ id, labelId, label, value, onChange, options }) {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ProfileSetup;
