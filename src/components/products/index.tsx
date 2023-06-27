import ITable from "@cmp/common/table";
import { useGetAllProductQuery } from "@redux/api/product";
import React from "react";
import { useTranslation } from "react-i18next";

const Prodcuts = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetAllProductQuery({
    options: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log(data);
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
    </>
  );
};

export default Prodcuts;
