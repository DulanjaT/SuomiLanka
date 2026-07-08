import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import { Person, Store } from "@mui/icons-material";
import { Divider } from "@mui/material";

const SignupPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" component="h1" fontWeight="bold">
          Welcome to SuomiLanka
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          fontWeight="bold"
          maxWidth="600px"
          sx={{ mx: "auto" }}
        >
          Connecting local businesses, products, and communities in Finland.
        </Typography>
      </Box>

      <Card
        elevation={4}
        sx={{
          borderRadius: 4,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 4, md: 5 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box
              sx={{
                flex: 1,
                p: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Person color="primary" sx={{ fontSize: 32, mr: 1.5 }} />

                <Box>
                  <Typography variant="h5" fontWeight="bold" color="primary">
                    Register as a User
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Browse shops, buy products, and support local businesses.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <TextField
                  fullWidth
                  label="Full Name"
                  placeholder="Matti Meikäläinen"
                  variant="outlined"
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  placeholder="matti@example.fi"
                  type="email"
                  variant="outlined"
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder="+358 40 1234567"
                  type="tel"
                  variant="outlined"
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                />
              </Box>
            </Box>

            {/* Start of Divider section */}

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                mx: 2,
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  px: 1,
                  bgcolor: "background.paper",
                }}
              >
                OR
              </Typography>
            </Divider>

            <Divider
              orientation="horizontal"
              flexItem
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                my: 4,
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  px: 1,
                  bgcolor: "background.paper",
                }}
              >
                OR
              </Typography>
            </Divider>

            {/* End of Divider section */}

            <Box
              sx={{
                flex: 1,
                p: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Store color="secondary" sx={{ fontSize: 32, mr: 1.5 }} />

                <Box>
                  <Typography variant="h5" fontWeight="bold" color="secondary">
                    Register as a Merchant
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Create a business profile, publish ads, and sell products.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignupPage;
