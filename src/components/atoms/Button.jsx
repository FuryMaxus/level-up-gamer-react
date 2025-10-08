import React from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from "clsx";

export default function Button({text = "", url,img=false, imgPath, onClick, ...props}) {
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
      {...props}
    >
      {img ? <img src={imgPath} alt={text}></img> : null }
     
      {text}

    </button>

  )
}
