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

export interface ISnackbarProps extends ISnackbarState {
  closeHandler: () => void;
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

export type Product = {
  id: number;
  title: string;
  price: string;
};

export type IPaginateProps = {
  onChange: (event: React.BaseSyntheticEvent, page: number) => void;
  page: number;
  count: number | undefined;
};

export type ITableProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tableData: any[] | undefined; // data that shows in table
  tableColumns: { title: string; field: string; style?: object }[]; // title: name of column, field: property name
  tableLabel: string; // table label that uses for tests
  emptyTableMessage: string; // message that shows when table is empty
  tableStyle?: object;
  isLoading?: boolean;
  isError?: boolean;
};
