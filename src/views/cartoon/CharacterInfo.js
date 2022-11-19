import React from "react";
import { Link } from "react-router-dom";
function CharacterInfo() {
  return (
    <div>
      <h1>Character Info Page</h1>
      <Link to="/mushroom1">
        <h2>Mushroom</h2>
      </Link>
      <Link to="/bee1">
        <h2>Bee</h2>
      </Link>
      <Link to="/sprout1">
        <h2>Sprout</h2>
      </Link>
      <Link to="/gardener1">
        <h2>Gardener</h2>
      </Link>
    </div>
  );
}
export default CharacterInfo;
