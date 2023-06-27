import { Box, Typography } from "@mui/material";
import * as I18next from "react-i18next";
const NotFound = () => {
  const { t } = I18next.useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ mt: "130px" }}>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
            {t("NotFound")}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", mt: "60px" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default NotFound;
