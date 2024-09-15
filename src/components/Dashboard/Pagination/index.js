import React from "react";
import "./styles.css";

import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ page, handlePageChange }) {
  return (
    <div className="pagination-div">
      <Pagination
        sx={{
          "& .MuiPaginationItem-text": {
            color: "var(--white) !important",
            border: "1px solid var(--blue)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected": {
           backgroundColor: "var(--blue) !important",
            borderColor: "var(--blue) !important",
            color: "var(--white) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }}
        count={10}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}
