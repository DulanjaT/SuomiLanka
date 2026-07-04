import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: 700,
          }}
        >
          LankaHub
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" color="primary" component={Link} to="/">
            Home
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/ads">
            Ads
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/login">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
