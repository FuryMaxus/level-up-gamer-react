import React, { useContext } from 'react'
import '../../styles/Form.css'
import { useRef } from 'react'
import { useState } from 'react'
import Button from '../atoms/Button';
import {useAuth } from '../../context/AuthContext';


function Login() {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const formRef = useRef(null)
  const { login } = useAuth();

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateEmail = (emailValue) => {
    if(!emailValue.includes('@')) {
      return 'Error, el email debe incluir (@)';
    }
    return '';
  }

  const validatePassword = (passwordValue) => {
    if(passwordValue.length < 5) {
      return 'Error, la contraseña debe tener al menos 5 carácteres';
    }
    return '';
  }

    const handleEmail = (e) => {
      setEmail(e.target.value);
    }

    const handlePassword = (e) => {
      setPassword(e.target.value);
        
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitted(true);

      const emailErrorMsg = validateEmail(email);
      const passwordErrorMsg = validatePassword(password);

      if (emailErrorMsg || passwordErrorMsg) {
        setError(emailErrorMsg || passwordErrorMsg);
        return;
      }
      setError("");
      try {
        await login(email, password);
      } catch (err) {
          setError("Credenciales inválidas");
      }
    }

        
    const emailHasError = validateEmail(email) !== '';
    const passwordHasError = validatePassword(password) !== '';

    const emailClass = isSubmitted && emailHasError ? 'error' : '';
    const passwordClass = isSubmitted && passwordHasError ? 'error' : '';

    const displayError = error;
  
      
  
  return (
    <form action="#" id="formulario" ref={formRef} onSubmit={handleSubmit}>
        <h1>Inicia Sesión en tu cuenta LEVEL UP GAMER</h1>

        <div className="row">
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" placeholder="Ingresa tu E-mail"
            onChange={handleEmail} 
            value={email}
            className={emailClass}
            />
        </div>

        <div className="row">
            <label htmlFor="clave1">Contraseña</label>
            <input type="password" id="clave1" placeholder="Ingresa tu contraseña"
            onChange={handlePassword} 
            value={password}
            className={passwordClass}
            
            />
        </div>

        <p id="errores">{displayError}</p>

        <Button 
        text = "Iniciar Sesión" ></Button>
        
        <p>¿Aún no tienes una cuenta? <a href='/registrarse'>Regístrate</a></p>
    </form>
  )
}

export default Login