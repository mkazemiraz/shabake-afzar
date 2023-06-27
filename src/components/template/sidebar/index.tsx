import {
  styled,
  Toolbar,
  IconButton,
  useTheme,
  Divider,
  List,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import GlobalConstants from "@constants/GlobalConstants";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ApartmentIcon from "@mui/icons-material/Apartment";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import GroupIcon from "@mui/icons-material/Group";
import ExtensionIcon from "@mui/icons-material/Extension";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import InfoIcon from "@mui/icons-material/Info";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShowChartIcon from "@mui/icons-material/ShowChart";

import MenuItem from "./menu-item";
import { useTranslation } from "react-i18next";
import Paths from "@constants/Paths";

const KChatDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    width: GlobalConstants.DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Sidebar = (props: { open: boolean; toggleDrawer: () => void }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <KChatDrawer variant="permanent" open={props.open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={props.toggleDrawer}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon color="secondary" />
          ) : (
            <ChevronLeftIcon color="secondary" />
          )}
        </IconButton>
      </Toolbar>
      <Divider />
      <List sx={{ py: 0 }}>
        <MenuItem
          path={Paths.FEDERATION.ROOT}
          title={t("MenuItem.Federation")}
          icon={<ApartmentIcon />}
          isMenuOpen={props.open}
        />
        <MenuItem
          path={Paths.TENANT.ROOT}
          title={t("MenuItem.Tenant")}
          icon={<ContactEmergencyIcon />}
          isMenuOpen={props.open}
        />
        <MenuItem
          path={Paths.USERS.ROOT}
          title={t("MenuItem.Users")}
          icon={<GroupIcon />}
          isMenuOpen={props.open}
        />
        <MenuItem
          path={Paths.PLUGIN.ROOT}
          title={t("MenuItem.Plugin")}
          icon={<ExtensionIcon />}
          isMenuOpen={props.open}
        />
        <MenuItem
          path={Paths.ROLE.ROOT}
          title={t("MenuItem.Role")}
          icon={<AdminPanelSettingsIcon />}
          isMenuOpen={props.open}
        />
        <MenuItem
          path={Paths.INFO.ROOT}
          title={t("MenuItem.Information")}
          icon={<InfoIcon />}
          isMenuOpen={props.open}
        />
        <MenuItem
          path={Paths.SETTING.ROOT}
          title={t("MenuItem.Setting")}
          icon={<SettingsApplicationsIcon />}
          isMenuOpen={props.open}
        />
        <MenuItem
          path={Paths.NOTIFICATION.ROOT}
          title={t("MenuItem.Notification")}
          icon={<NotificationsIcon />}
          isMenuOpen={props.open}
        />
        <MenuItem
          path={Paths.REPORT.ROOT}
          title={t("MenuItem.Report")}
          icon={<ShowChartIcon />}
          isMenuOpen={props.open}
        />
      </List>
    </KChatDrawer>
  );
};

export default Sidebar;
