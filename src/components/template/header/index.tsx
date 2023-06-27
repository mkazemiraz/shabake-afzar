import {
  Toolbar,
  IconButton,
  Typography,
  Stack,
  AppBar,
  Tooltip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Paths from "@constants/Paths";
import useConfirm from "@hooks/useConfirm";

const Header = () => {
  const { showConfirm, hideConfirm } = useConfirm();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const logoutHandler = () => {
    showConfirm({
      title: t("Logout"),
      description: t("LogoutMessage"),
      cancelBtnLabel: t("Dismiss"),
      confirmBtnLabel: t("Confirm"),
      onCancel: () => hideConfirm(),
      onConfirm: () => {
        localStorage.removeItem("token");
        navigate(Paths.LOGIN, { replace: true });
        hideConfirm();
      },
    });
  };
  return (
    <AppBar>
      <Toolbar>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {t("WelcomeMessage")}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Tooltip title={t("Logout")} arrow={true} placement="bottom">
            <IconButton color="inherit" onClick={logoutHandler}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
