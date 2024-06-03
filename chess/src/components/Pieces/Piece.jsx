import React from "react";
import "./Pieces.css";

const Piece = ({ rank, file, piece }) => {
  return <div 
  className={`piece ${piece} p-${file}${rank}`} 
  draggable={true}
  />;
};

export default Piece;
