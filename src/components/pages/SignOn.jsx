import React from 'react'
import '../../styles/Form.css'
import { useRef } from 'react'
import { useState } from 'react'


function SignOn() {
    const [nombre, setNombre] = useState('')
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const formRef = useRef(null)
    
  
    const handleName = (e) => {
      const valor = e.target.value;
      setNombre(valor);
      setError(valor.length < 3 ? 'Error, ingrese mínimo 3 caracteres.' : ''); 
    }
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
        <h1>Crear tu cuenta LEVEL UP GAMER</h1>
        
        
        <div className="row">
            <label htmlfor="nombre">Nombre Completo</label>
            <input type="text" id="nombres" placeholder="Joe Bryan Black Man"
            onChange={handleName} value={nombre}
            className={nombre.length <3 ? 'error' : ''}
            />
        </div>

        <div className="row">
            <label htmlfor="email">E-mail</label>
            <input type="text" id="email" placeholder="joeblack777@gmail.com"
            onChange={handleEmail} value={email}
            className={!email.includes('@')? 'error' : ''}
            />
        </div>

        <div className="row">
            <label htmlfor="direccion">Dirección</label>
            <input type="text" id="direccion" placeholder="Pardo #777"/>
        </div>

        <div className="row">
            <label htmlfor="contraseña1">Contraseña</label>
            <input type="password" id="clave1" placeholder="Clave123456"/>
        </div>

        <div className="row">
            <label htmlfor="contraseña2">Confirmar contraseña</label>
            <input type="password" id="clave2" placeholder="Clave123456"/>
        </div>

        <p id="errores">{error}</p>
  
        <button type="sumbit">Registrarse</button>
        <button type="reset">Limpiar</button>

        <p>¿Ya tienes una cuenta? <a href="#">Inicia Sesión</a></p>
    </form>
  )
}

export default SignOn