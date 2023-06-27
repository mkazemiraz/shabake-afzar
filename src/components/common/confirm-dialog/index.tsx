/* eslint-disable @typescript-eslint/no-empty-function */
import { IConfirmDialogStates } from "@constants/GlobalTypes";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  DialogContentText,
  Typography,
  Box,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

const IConfirmDialog = (props: IConfirmDialogStates) => {
  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      <DialogTitle
        aria-label="confirmation-dialog-title"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography sx={{ fontWeight: 700 }}>{props.title}</Typography>
        <Box onClick={props.onClose} sx={{ cursor: "pointer" }}>
          <ClearIcon />
        </Box>
      </DialogTitle>
      <DialogContent aria-label="confirmation-dialog-description">
        <DialogContentText mb={2}>{props.description}</DialogContentText>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={props.onConfirm}
            variant="contained"
            color="success"
            sx={{ flexBasis: "50%" }}
            startIcon={<CheckIcon />}
          >
            {props.confirmBtnLabel}
          </Button>
          <Button
            onClick={props.onCancel}
            variant="contained"
            color="inherit"
            sx={{ flexBasis: "50%" }}
            startIcon={<ClearIcon />}
          >
            {props.cancelBtnLabel}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default IConfirmDialog;
