import React from "react";
import { SnackbarDialog } from "@contexts/SnackbarContext";
const useSnackbar = () => {
  return React.useContext(SnackbarDialog);
};

export default useSnackbar;
