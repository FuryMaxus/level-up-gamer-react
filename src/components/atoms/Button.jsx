import React from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from "clsx";

export default function Button(props) {
  const {text = "", url,img=false, imgPath, onClick, ...extraProps} = props
  const navigate = useNavigate();

  const handleClick = (e) => {
    if(onClick) {
      onClick(e);
    } else if(url){
      navigate(url);
    }
  }

  return (
    <button 
      onClick={handleClick}
      {...extraProps}
    >
      {img ? <img src={imgPath} alt={text}></img> : null }
     
      {text}

    </button>

  )
}
