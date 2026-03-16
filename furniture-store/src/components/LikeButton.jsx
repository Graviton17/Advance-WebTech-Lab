import React, { useState } from "react";

function LikeButton({ initialLiked = false }) {
  const [liked, setLiked] = useState(initialLiked);

  return (
    <button
      type="button"
      className={`likeButton ${liked ? "likeButton--active" : ""}`}
      onClick={() => setLiked((v) => !v)}
      aria-pressed={liked}
    >
      {liked ? "Liked" : "Like"}
    </button>
  );
}

export default LikeButton;

