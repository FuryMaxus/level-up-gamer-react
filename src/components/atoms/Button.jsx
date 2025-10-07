import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import clsx from "clsx";

export default function Button({text = "", url, variant, img=false, imgPath}) {
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
      
        
      {img ? <img src={imgPath} alt={text}></img> : null }
     
      {text}

    </button>

  )
}
