import React from 'react'

export default function RadioGroup({id, title, name, options, selected, onChange}) {
  return (
    <div id={id} className="radio-container">
        {title && <h2>{title}</h2>}
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

  )
}
