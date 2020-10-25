import React, { useState, useEffect } from "react";

import "./SpinnerButton.scss";

import { Button, Spinner } from "react-bootstrap";

interface ISpinnerButtonProps {
  shouldShowSpinner: boolean;
  currentOffset: number;
  updateOffset: UpdateOffset;
}

type UpdateOffset = (offset: number) => void;

const SpinnerButton: React.FC<ISpinnerButtonProps> = ({
  shouldShowSpinner,
  currentOffset,
  updateOffset,
}) => {
  const [offset, setOffset] = useState(currentOffset);

  useEffect(() => {
    updateOffset(offset);
  }, [offset]);

  return (
    <Button
      className="btn-spinner"
      onClick={() => {
        setOffset(offset + 50);
      }}
    >
      Charger plus de pokemons...
      {shouldShowSpinner && (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          className="ml-2"
        />
      )}
    </Button>
  );
};

export default SpinnerButton;
