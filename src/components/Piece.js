import React from "react";
import { useState } from "react";
import PieceController from "./PieceController";

const Piece = () => {
  const [piece, setPiece] = useState(1);

  function artir() {
    setPiece(piece + 1);
  }

  function azalt() {
    setPiece(piece - 1);
  }

  return (
    <div>
      <PieceController sayac={piece} increase={artir} decrease={azalt} />
    </div>
  );
};

export default Piece;
