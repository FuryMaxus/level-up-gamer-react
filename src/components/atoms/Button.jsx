import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import clsx from "clsx";

export default function Button({text = "", url, variant, img=false, imgPath, onClick}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if(onClick) {
      onClick();
    } else if(url){
        navigate(url);
    }
  }



  return (
    <button 
      onClick={handleClick}
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
