import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <BottomNavigation
      value={location.pathname}
      onChange={(event, newValue) => {
        navigate(newValue);
      }}
      showLabels
      sx={{
        backgroundColor: "#B2A0E7",
        position: "fixed",
        bottom: "0px",
        right: "0px",
        left: "0px",
      }}
    >
      <BottomNavigationAction
        value="/search"
        label="Home"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        value="/notifications"
        label="Notifications"
        icon={<NotificationsNoneIcon />}
      />
      <BottomNavigationAction
        value="/profile"
        label="Profile"
        icon={<AccountCircleOutlinedIcon />}
      />
      <BottomNavigationAction
        value="/signup" // Assuming you want this to navigate to a search page.
        label="Sign out"
        icon={<LogoutIcon />}
      />
    </BottomNavigation>
  );
}

export default Navbar;
