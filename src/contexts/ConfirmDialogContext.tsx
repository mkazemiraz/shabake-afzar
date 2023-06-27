/* eslint-disable @typescript-eslint/no-empty-function */
import IConfirmDialog from "@cmp/common/confirm-dialog";
import {
  IConfirmDialogProps,
  IConfirmDialogStates,
} from "@constants/GlobalTypes";
import React, { createContext, useCallback, useState } from "react";

export const ConfirmDialog = createContext<{
  showConfirm: (data: IConfirmDialogProps) => void;
  hideConfirm: () => void;
}>({ showConfirm: () => {}, hideConfirm: () => {} });

const ConfirmDialogProvider = (props: React.PropsWithChildren) => {
  const [dialogStates, setDialogStates] = useState<IConfirmDialogStates>({
    isOpen: false,
    title: "Confirmation Dialog",
    description: "Are you sure?",
    cancelBtnLabel: "cancel",
    confirmBtnLabel: "confirm",
    onCancel: () => {},
    onConfirm: () => {},
    onClose: () => {},
  });

  const showConfirm = useCallback((data: IConfirmDialogProps) => {
    setDialogStates({ ...data, isOpen: true });
  }, []);

  const hideConfirm = useCallback(() => {
    setDialogStates((state) => ({ ...state, isOpen: false }));
  }, []);

  return (
    <ConfirmDialog.Provider value={{ showConfirm, hideConfirm }}>
      {props.children}
      <IConfirmDialog {...dialogStates} onClose={hideConfirm} />
    </ConfirmDialog.Provider>
  );
};
export default ConfirmDialogProvider;
