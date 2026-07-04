import { Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Typography variant="h3" fontWeight={700}>
        Discover Sri Lankan Businesses in Finland
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        Browse restaurants, services, events, shops, and local advertisements.
      </Typography>
    </>
  );
};

export default HomePage;