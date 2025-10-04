import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Icon({path, iconClass, quantity = 0, variant}) {
  return (
    <Link to={path} className={clsx(variant)}>
        {variant === "cart-icon" && <span>{quantity}</span>}
        <i className={iconClass}/>
    </Link> 
  )
}
