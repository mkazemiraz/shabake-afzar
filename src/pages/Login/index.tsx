import { CssBaseline, Grid, Paper, Box } from "@mui/material";
import reactLogo from "@assets/react.svg";
import SigninForm from "@cmp/login-form";
const Login = () => {
  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            width={"50%"}
            height={"auto"}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6} component={Paper} square>
          <Box
            sx={{
              py: 5,
              px: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <SigninForm />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
