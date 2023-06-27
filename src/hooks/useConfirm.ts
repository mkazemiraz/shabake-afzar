import React from "react";
import { ConfirmDialog } from "@contexts/ConfirmDialogContext";
const useConfirm = () => {
  return React.useContext(ConfirmDialog);
};

export default useConfirm;
