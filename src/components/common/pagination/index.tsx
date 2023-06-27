import { IPaginateProps } from "@constants/GlobalTypes";
import { Pagination, PaginationItem } from "@mui/material";

const IPaginate = (props: IPaginateProps) => {
  return (
    <>
      <Pagination
        color="primary"
        shape="rounded"
        {...props}
        renderItem={(params) => {
          return <PaginationItem {...params} />;
        }}
        {...props}
      />
    </>
  );
};

export default IPaginate;
