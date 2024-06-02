import React from "react";
import { getCharacter } from "../../utils/constants";
import "./Board.css";
import Rank from "./bits/Ranks/Rank";
import File from "./bits/Files/File";

const Board = () => {
  const ranks = Array(8)
    .fill()
    .map((_, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((_, i) => getCharacter(i));

  const getClassName = (i, j) => {
    let c = "tile ";
    c += (i + j) % 2 === 0 ? "tile-light" : "tile-dark";
    return c;
  };

  return (
    <div className="boards">
      <Rank ranks={ranks} />
      <div className="tiles">
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <div key={`${file}-${rank}`} className={getClassName(i, j)}>
              
            </div>
          ))
        )}
      </div>
      <File files={files} />
    </div>
  );
};

export default Board;
