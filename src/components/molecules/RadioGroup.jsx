import React from 'react'

export default function RadioGroup(props) {
  
  const {id, title, name, options, selected, onChange} = props;

  return (
    <div id={id} className="radio-container">
      <div>
        {title && <h2>{title}</h2>}
      </div>
      <div className='radio-options-container'>
        {options.map((option) => (
        <label key={option.value}>
          <input type="radio" 
            name={name} 
            value={option.value}
            checked={selected === option.value}
            onChange={(e) => onChange(e.target.value)}
            />
          {option.label}
        </label>
      ))}
      </div>
      
    </div>

  )
}
