import React from "react";
import { getCharacter } from "../../utils/constants";
import "./Board.css";
import Rank from "./bits/Ranks/Rank";
import File from "./bits/Files/File";
import Pieces from "../Pieces/Pieces";

const Board = () => {
  const ranks = Array(8)
    .fill()
    .map((_, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((_, i) => i+1);

  const getClassName = (i, j) => {
    let c = "tile ";
    c += (i + j) % 2 === 0 ? "tile-dark" : "tile-light";
    return c;
  };

  return (
    <div className="boards">
      <Rank ranks={ranks} />
      <div className="tiles">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div key={`${file}-${rank}`} className={getClassName(9-i, j)}>
              
            </div>
          ))
        )}
      </div>

        <Pieces />

      <File files={files} />
    </div>
  );
};

export default Board;
