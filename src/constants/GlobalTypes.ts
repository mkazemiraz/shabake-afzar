/* eslint-disable @typescript-eslint/no-explicit-any */
import { AlertColor } from "@mui/material/Alert";

export const GET = "get";
export const POST = "post";
export const PUT = "put";
export const DELETE = "delete";

export type IAxiosRTKQueryRequest = {
  queryParams?: any;
  pathParams?: any;
  body?: any;
  options?: any;
};

export interface IPageSetting {
  pageIndex: number;
  pageSize: number;
}

export interface ISnackbarState {
  message: string | undefined;
  type: AlertColor | undefined;
  isOpen: boolean;
}

export interface IConfirmDialogProps {
  title: string;
  description: string;
  confirmBtnLabel: string;
  cancelBtnLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
  onClose?: () => void;
}

export interface IConfirmDialogStates extends IConfirmDialogProps {
  isOpen: boolean;
}

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};
