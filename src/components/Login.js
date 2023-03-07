import React from "react";
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import HandymanIcon from "@mui/icons-material/Handyman";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "@mui/base";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
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
            <Typography sx={{ cursor: "pointer" }}>
              <Link to="/profil" style={{ color: "white" }}>
                {item.Name}
              </Link>
            </Typography>
          ))}
        </MenuBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Login;
