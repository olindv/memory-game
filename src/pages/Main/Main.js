import React from "react";
import "./Main.css";
import { Link} from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Link to="/game" className="main__link">Start the game</Link>
    </div>
  );
};

export default Main;
