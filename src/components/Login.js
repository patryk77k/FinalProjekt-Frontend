import React from "react";
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import HandymanIcon from "@mui/icons-material/Handyman";
import { NavLink } from "react-router-dom";

const Login = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 20,
  });
  const MenuItems = [
    { Name: "Login", cursor: "pointer" },
    { Name: "Register", cursor: "pointer" },
  ];
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Box>
          <NavLink to="/">
            <HandymanIcon />
          </NavLink>
        </Box>
        <MenuBox
          sx={{
            cursor: "pointer",
            display: { xs: "none", sm: "none", md: "flex" },
          }}
        ></MenuBox>
        <MenuBox>
          {MenuItems.map((item) => (
            <Typography sx={{ cursor: "pointer" }}>{item.Name}</Typography>
          ))}
        </MenuBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Login;
