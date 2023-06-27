import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useTheme,
  Skeleton,
  Alert,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { ITableProps } from "@constants/GlobalTypes";

export default function ITable(props: ITableProps) {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <TableContainer
        component={Box}
        sx={{
          borderRadius: "20px",
          mt: 2,
          p: 3,
          boxSizing: "border-box",
        }}
      >
        <Table
          sx={{
            minWidth: 680,
            tableLayout: "fixed",
          }}
          aria-label={props.tableLabel}
        >
          <TableHead sx={{ mb: 2 }}>
            <TableRow
              sx={{
                backgroundColor: theme.palette.grey[400],
              }}
            >
              {props.tableColumns.map((header) => (
                <TableCell
                  align="center"
                  key={header.field}
                  component="th"
                  sx={{
                    ...header.style,
                  }}
                >
                  {header.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.isLoading &&
              [...Array(3)].map((_e, i) => (
                <TableRow
                  // index is not good for key, my option is uuid
                  key={i}
                  sx={{
                    backgroundColor: theme.palette.common.white,
                  }}
                >
                  {props.tableColumns.map((_e, i) => (
                    <TableCell key={i}>
                      <Skeleton
                        variant="rounded"
                        height={30}
                        animation="wave"
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}

            {props.isError && (
              <TableRow>
                <TableCell
                  sx={{ p: 2 }}
                  align="center"
                  colSpan={props.tableColumns.length}
                >
                  <Alert
                    variant="filled"
                    severity="error"
                    sx={{ justifyContent: "center" }}
                  >
                    {t("Messages.RequestError")}
                  </Alert>
                </TableCell>
              </TableRow>
            )}
            {props?.tableData?.length === 0 && (
              <TableRow
                sx={{
                  backgroundColor: theme.palette.common.white,
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell
                  sx={{ p: 2 }}
                  align="center"
                  colSpan={props.tableColumns.length}
                >
                  {props.emptyTableMessage}
                </TableCell>
              </TableRow>
            )}
            {props.tableData?.map((row, index) => (
              // index is not good for key, my option is uuid
              <React.Fragment key={index}>
                <TableRow
                  sx={{
                    backgroundColor: theme.palette.common.white,
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:nth-of-type(odd)": {
                      backgroundColor: theme.palette.grey[100],
                    },
                  }}
                >
                  {props.tableColumns.map((header, index) => (
                    <TableCell
                      align="center"
                      // index is not good for key, my option is uuid
                      key={index}
                      sx={{
                        p: 2,
                        ...props.tableStyle,
                        ...header.style,
                      }}
                      // title={row[header.field]}
                    >
                      {row[header.field]}
                    </TableCell>
                  ))}
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
