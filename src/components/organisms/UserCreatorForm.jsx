import React, { useState } from 'react'

export default function UserCreatorForm({ whenSaving, whenCanceling }) {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    rol: 'ROL_USER'
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    whenSaving(formState);
  };

  return (
    <div className="form-container">
      <h2>Registrar Nuevo Usuario</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de Usuario:</label>
          <input 
            type="text" 
            name="username" 
            value={formState.username} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Email (ID):</label>
          <input 
            type="email" 
            name="email" 
            value={formState.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input 
            type="password" 
            name="password" 
            value={formState.password} 
            onChange={handleChange} 
            required 
            minLength={4}
          />
        </div>

        <div className="form-group">
          <label>Dirección:</label>
          <input 
            type="text" 
            name="address" 
            value={formState.address} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Rol Asignado:</label>
          <select 
             name="rol" 
             value={formState.rol} 
             onChange={handleChange}
          >
            <option value="ROL_USER">Cliente (ROL_USER)</option>
            <option value="ROL_TRABAJADOR">Trabajador (ROL_TRABAJADOR)</option>
            <option value="ROL_ADMIN">Administrador (ROL_ADMIN)</option>
          </select>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn-save">Crear Usuario</button>
          <button type="button" className="btn-cancel" onClick={whenCanceling}>Cancelar</button>
        </div>
      </form>
    </div>
  )
}
