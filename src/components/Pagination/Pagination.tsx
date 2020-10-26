import React from "react";

import "./Pagination.scss";
import { InputGroup, FormControl, Button } from "react-bootstrap";

interface IPaginationProps {
  currentPage: number;
  numberOfPages: number;
  updateCurrentPage: UpdateCurrentPage;
}

type UpdateCurrentPage = (newCurrentPage: number) => void;

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  numberOfPages,
  updateCurrentPage,
}) => {
  return (
    <div className="pagination-container">
      <InputGroup>
        <InputGroup.Prepend>
          <Button
            variant="outline-secondary"
            disabled={currentPage === 1}
            onClick={() => {
              updateCurrentPage(currentPage - 1);
            }}
          >
            &#x276e;
          </Button>
          <Button
            variant="outline-secondary"
            disabled={currentPage === 1}
            onClick={() => {
              updateCurrentPage(1);
            }}
          >
            &#x00AB;
          </Button>
        </InputGroup.Prepend>
        <input
          type="number"
          className="text-center"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            updateCurrentPage(e.currentTarget.valueAsNumber);
          }}
          min={1}
          max={numberOfPages}
          value={currentPage}
        />{" "}
        <span>/ {numberOfPages}</span>
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            disabled={currentPage === numberOfPages}
            onClick={() => {
              updateCurrentPage(numberOfPages);
            }}
          >
            &#x00BB;
          </Button>
          <Button
            variant="outline-secondary"
            disabled={currentPage >= numberOfPages}
            onClick={() => {
              updateCurrentPage(currentPage + 1);
            }}
          >
            &#x276F;
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Pagination;
