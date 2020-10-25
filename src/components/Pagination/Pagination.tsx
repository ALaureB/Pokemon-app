import React from "react";

import "./Pagination.scss";

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
    <div className="input-group">
      <div className="input-group-btn">
        <button
          className="btn btn-outline-secondary"
          disabled={currentPage === 1}
          onClick={() => {
            updateCurrentPage(currentPage - 1);
          }}
        >
          &#x276e;
        </button>
        <button
          className="btn btn-outline-secondary"
          disabled={currentPage === 1}
          onClick={() => {
            updateCurrentPage(1);
          }}
        >
          &#x00AB;
        </button>
      </div>
      <input
        type="number"
        className="text-center"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          updateCurrentPage(e.currentTarget.valueAsNumber);
        }}
        max={numberOfPages}
        value={currentPage}
      />{" "}
      <span>/ {numberOfPages}</span>
      <div className="input-group-btn">
        <button
          className="btn btn-outline-secondary"
          disabled={currentPage === numberOfPages + 1}
          onClick={() => {
            updateCurrentPage(numberOfPages);
          }}
        >
          &#x00BB;
        </button>
        <button
          className="btn btn-outline-secondary"
          disabled={currentPage >= numberOfPages}
          onClick={() => {
            updateCurrentPage(currentPage + 1);
          }}
        >
          &#x276F;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
