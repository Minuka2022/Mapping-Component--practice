import React from "react";
import Entry from "./Entry";

function emojiCard(emojiCon) {
  return (
    <Entry
      emojiIcon={emojiCon.emoji}
      name={emojiCon.name}
      content={emojiCon.meaning}
    />
  );
}

export default emojiCard;
