import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Container component="main" maxWidth="lg" sx={{ py: 4, flex: 1 }}>
        <Outlet />
      </Container>

      <Footer />
    </Box>
  );
};

export default MainLayout;