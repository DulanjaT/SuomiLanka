import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
        bgcolor: "grey.100",
        mt: "auto",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} LankaHub. Connecting Sri Lankan businesses in Finland.
      </Typography>
    </Box>
  );
};

export default Footer;