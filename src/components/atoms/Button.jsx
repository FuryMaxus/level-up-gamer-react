import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import clsx from "clsx";

export default function Button({text = "Button", url, variant}) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => navigate(url)}
      className={
        clsx(variant,
          {
            "selected-button-header":
            variant === "header-button" &&
            location.pathname === url,
          } 
    )}
    >
      {text}
    </button>

  )
}
