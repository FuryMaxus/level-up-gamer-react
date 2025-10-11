import React, { useState } from 'react'

export default function Slider(props) {
    const {title,id,max} = props;

    const [sliderValue,setSliderValue] = useState(max);

    const handleChange = (event,newValue) => {
        setSliderValue(parseInt(event.target.value),newValue);
    }

  return (
    <div className="slider-container">
                <h2>{title}</h2>
                <label htmlFor={id}></label>
                <input type="range" id={id} min="0" max={max} value= {sliderValue} step="50000" onChange={handleChange}/>
                <p>Limite: {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(sliderValue)}</p>
    </div>

  )
}
