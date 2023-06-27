import { IPaginateProps } from "@constants/GlobalTypes";
import { Pagination, PaginationItem } from "@mui/material";

export default function IPaginate(props: IPaginateProps) {
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
}
