import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./header";
import RequireAuth from "@cmp/auth/RequireAuth";

const MainTemplate = () => {
  return (
    <RequireAuth>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            minHeight: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Box sx={{ px: 5, py: 1 }}>
            <Box>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
    </RequireAuth>
  );
};

export default MainTemplate;
