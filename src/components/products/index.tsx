import { useGetAllProductQuery } from "@redux/api/product";
import { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Box } from "@mui/material";

const Prodcuts = () => {
  const gridRef = useRef<AgGridReact>(null);
  const { t } = useTranslation();
  const { data } = useGetAllProductQuery({
    options: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onGridReady = useCallback((params: any) => {
    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
    gridRef.current?.api?.sizeColumnsToFit();
  }, []);

  return (
    <Box sx={{ height: 600 }}>
      <div
        className="ag-theme-alpine"
        style={{ height: "100%", width: "100%" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={data?.products}
          columnDefs={[
            {
              field: "id",
              filter: "agTextColumnFilter",
              headerName: t("id"),
              floatingFilterComponentParams: {
                suppressFilterButton: true,
              },
            },
            { field: "title", filter: true, headerName: t("title") },
            { field: "price", filter: true, headerName: t("price") },
          ]}
          onGridReady={onGridReady}
          enableRtl={true}
        />
      </div>
    </Box>
  );
};

export default Prodcuts;
