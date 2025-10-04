import React from 'react'
import { Link } from 'react-router-dom'

export default function NavIcon({specialId, path, iconClass, quantity = 0}) {
  return (
    <Link to={path} id={specialId ? specialId : undefined}>
        {specialId && <span>{quantity}</span>}
        <i className={iconClass}/>
    </Link> 
  )
}
