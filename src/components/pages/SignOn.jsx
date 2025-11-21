import React from 'react'
import '../../styles/Form.css'
import { useRef } from 'react'
import { useState } from 'react'
import Button from '../atoms/Button'
import { registerService } from '../../services/AuthService'
import { useNavigate } from 'react-router-dom'


function SignOn() {

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[address,setAddress] = useState('')

    const formRef = useRef(null)
    
    const[isSubmitted, setIsSubmitted] = useState(false);

    const validateName = (nameValue) => {
      if(nameValue.length < 3){
        return 'Error, el nombre debe tener mínimo 3 caracteres.';
      }
      return '';
    }


    const validateEmail = (emailValue) => {
      if(!emailValue.includes('@')){
        return 'Error, el email debe incluir (@).';
      }
      return '';
    }


    const validatePasswordMatch = (passwordValue, confirmPasswordValue) => {
      if(passwordValue.length < 5){
        return 'Error, la contraseña debe tener al menos 5 carácteres.';
      }
      if(confirmPasswordValue.length === 0 && passwordValue.length > 0){
        return 'Error, debe confirmar la contraseña.';
    }
      if(passwordValue !== confirmPasswordValue){
        return 'Error, las contraseñas no coinciden.';
      }
      return '';
    }
  

    const handleName = (e) => {
      setName(e.target.value);
    }


    const handleEmail = (e) => {
      setEmail(e.target.value);
      
    }


    const handlePassword = (e) => {
      setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
    }

    const handleAddress = (e) => {
      setAddress(e.target.value);
    }


    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setIsSubmitted(true);
      
      const nameError = validateName(name);
      const emailError = validateEmail(email);
      const passwordError = validatePasswordMatch(password, confirmPassword);


      if (nameError || emailError || passwordError) {
        setError("Corrige los errores antes de continuar.");
        return; 
      }

      try {
        await registerService(name, email, password, address);
        
        navigate("/inicio-sesion");
      
      } catch (err) {
        setError("No se pudo registrar. Intenta con otro correo o usuario.");
      }
    };

    const nameHasError = validateName(name) !== '';
    const emailHasError = validateEmail(email) !== '';
    const passwordMatchError = validatePasswordMatch(password, confirmPassword) !== '';

    const nameClass = isSubmitted && nameHasError ? 'error' : '';
    const emailClass = isSubmitted && emailHasError ? 'error' : '';
    const passwordClass = isSubmitted && passwordMatchError ? 'error' : '';
    const confirmPasswordClass = isSubmitted && passwordMatchError ? 'error' : '';

    const displayError = isSubmitted && (nameHasError || emailHasError || passwordMatchError) ? error : '';
  
  
  return (
    <form action="#" id="formulario" ref={formRef} onSubmit={handleSubmit}>
        <h1>Crear tu cuenta LEVEL UP GAMER</h1>
        
        
        <div className="row">
            <label htmlFor="name">Nombre Completo</label>
            <input type="text" id="nombres" placeholder="Joe Bryan Black Man"
            onChange={handleName} value={name}
            className={nameClass}
            />
        </div>

        <div className="row">
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" placeholder="joeblack777@gmail.com"
            onChange={handleEmail} value={email}
            className={emailClass}
            />
        </div>

        <div className="row">
            <label htmlFor="direccion">Dirección</label>
            <input type="text" id="direccion" placeholder="Opcional"
            onChange={handleAddress} value={address}
            />
            
        </div>

        <div className="row">
            <label htmlFor="contraseña1">Contraseña</label>
            <input type="password" id="clave1" placeholder="Clave123456"
            onChange={handlePassword} 
            value={password}
            className={passwordClass}
            />
        </div>

        <div className="row">
            <label htmlFor="contraseña2">Confirmar contraseña</label>
            <input type="password" id="clave2" placeholder="Clave123456"
            onChange={handleConfirmPassword}
            value={confirmPassword}
            className={confirmPasswordClass}
            />

        </div>

        <p id="errores">{displayError}</p>
        <Button text = "Registrarse" type ='submit'></Button>
        
        <p>¿Ya tienes una cuenta? <a href='/inicio-sesion'>Inicia Sesión</a></p>
    </form>
  )
}

export default SignOn