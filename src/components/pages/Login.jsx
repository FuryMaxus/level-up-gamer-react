import React from 'react'
import '../../styles/Form.css'
import { useRef } from 'react'
import { useState } from 'react'


function Login() {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const formRef = useRef(null)
    
  
    
    const handleEmail = (e) => {
      const valor = e.target.value;
      setEmail(valor);
      setError(!valor.includes('@') ? 'Error, el email debe incluir (@)': ''); 
    }
    const handleSubmit = (e) => {
      const inputs = formRef.current.querySelectorAll('input');
      for(let input of inputs){
        if(input.classList.contains('error')){
          e.preventDefault();
          setError('Error, revise los campos en rojo.')
          return;
        }
      }
    }
      
  
  return (
    <form action="#" id="formulario" ref={formRef} onSubmit={handleSubmit}>
        <h1>Inicia Sesión en tu cuenta LEVEL UP GAMER</h1>

        <div className="row">
            <label htmlfor="email">E-mail</label>
            <input type="text" id="email" placeholder="Ingresa tu E-mail"
            onChange={handleEmail} value={email}
            className={!email.includes('@')? 'error' : ''}
            />
        </div>

        <div className="row">
            <label htmlfor="clave1">Contraseña</label>
            <input type="password" id="clave1" placeholder="Ingresa tu contraseña"/>
        </div>

        <p id="errores">{error}</p>
        <button type="sumbit">Iniciar Sesión</button>
        <button type="reset">Limpiar</button>

        <p>¿Aún no tienes una cuenta? <a href="#">Regístrate</a></p>
    </form>
  )
}

export default Login