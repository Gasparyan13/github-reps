import React from "react";

import { Button, Root } from "./Pagination.styled";
import { Props } from "./types";

const Pagination: React.FC<Props> = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <Root>
      {pages.map((page, index) => {
        return (
          <Button
            key={index}
            onClick={() => setCurrentPage(page)}
            active={page === currentPage}
          >
            {page}
          </Button>
        );
      })}
    </Root>
  );
};

export default Pagination;
