import React, { useState } from 'react'

export default function Slider(props) {

  const {title,id,max,value,onChange} = props;
  
  return (
    <div className='slider-container'>
      <h2>{title}</h2>
      <div className="slider">
        <label htmlFor={id}></label>
        <input type="range" id={id} min="0" max={max} value= {value}  onChange={onChange}/>
        <p>Limite: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(value)}</p>
      </div>
      
    </div>

  )
}
