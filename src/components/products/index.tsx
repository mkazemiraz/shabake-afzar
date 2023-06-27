import IPaginate from "@cmp/common/pagination";
import ITable from "@cmp/common/table";
import { Stack } from "@mui/material";
import {
  useGetAllProductQuery,
  useGetPagingProductMutation,
} from "@redux/api/product";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Prodcuts = () => {
  const { t } = useTranslation();
  //   const { data, isLoading, isError } = useGetAllProductQuery({
  //     options: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   });

  const [updateProducts, { data, isLoading, isError }] =
    useGetPagingProductMutation();

  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    updateProducts({
      options: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      queryParams: {
        limit: 10,
        skip: (page - 1) * 10,
      },
    });
  }, [page, updateProducts]);
  return (
    <>
      <ITable
        emptyTableMessage={t("ProductNotFound")}
        tableColumns={[
          { field: "id", title: `${t("id")}` },
          { field: "title", title: `${t("title")}` },
          { field: "price", title: `${t("price")}` },
        ]}
        tableData={data?.products}
        isLoading={isLoading}
        isError={isError}
        tableLabel="products"
      />

      {data && data.total > 0 && (
        <Stack
          spacing={2}
          justifyContent={"center"}
          flexDirection={"row"}
          mt={3}
        >
          <IPaginate
            count={Math.ceil(data?.total / 10)}
            onChange={(_event, page: number) => setPage(page)}
            page={page}
          />
        </Stack>
      )}
    </>
  );
};

export default Prodcuts;
