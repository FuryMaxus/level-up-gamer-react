import clsx from "clsx";
import React from "react";

export default function StarRating({ rating }) {
  const fullStars = Math.floor(rating); 
  return (
    <div className="user-review-star-ranking">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={clsx(
            "fa-solid fa-star",
            i < fullStars ? "text-yellow-400" : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
}