import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function NavButton({text = "Botton", url}) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    
    <button 
      onClick={() => navigate(url)}
      className={location.pathname === url ? "selected-button-header" : ""}>
      {text}
    </button>

  )
}
