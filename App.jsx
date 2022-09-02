import React from "react";
import emojipedia from "../emojipedia";
import emojiCard from "./emojiCard";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(emojiCard)}
    </div>
  );
}

export default App;
