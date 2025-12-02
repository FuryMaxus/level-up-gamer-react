import React, { use, useEffect, useState } from 'react'
import axios from 'axios';
import '../../styles/Profile.css'

const BASE_URL = 'http://localhost:8081';

 function Profile() {
  const [user , setUser] = useState(null);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);
  const[isEditing, setIsEditing] = useState(false);
  const[formData, setFormData] = useState({});

  const token = localStorage.getItem('token');

  const fetchUserData = async () => {
    if(!token){
      setError("Usuario no autenticado. Por favor, inicie sesión");
      setLoading(false);
      return
    }

    try{
      const response = await axios.get(
        `${BASE_URL}/api/v1/usuarios/me`,
        {
          headers:{
            Authorization: `Bearer ${token}`
          }
        }
      );

      const userData = response.data;
      setUser(userData);
      setFormData(userData);
      setLoading(false);

    } catch (err) {
            setError("No se pudo cargar la información del perfil.");
            setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  },[]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try{
      const response = await axios.put(
        `${BASE_URL}/api/v1/usuarios/me`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUser(response.data);
      setIsEditing(false);
      alert(" Perfil actualizado con éxito.");
    
    }catch(err){
      setError("Error al actualizar. Por favor, verifica los datos.");
      console.error("Error PUT:", err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  if(loading) 
    return <p>Cargando datos del usuario...</p>;

  if(error)
    return <p style={{color: 'red'}}>Error: {error}</p>;

  if(!user)
    return <p>No se encontraron datos del usuario.</p>;

  return(
    <div className='user-profile-container'>
      <div className='profile-header'>
      <h2>Mi perfil LEVEL UP GAMER</h2>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre: </label>
            <input
            type = "text"
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
            type='email'
            name='email'
            value={formData.email|| ''}
            onChange={handleChange}
            required
            />
          </div>
          <div>
            <label>Direccion:</label>
            <input
            type='text'
            name='adress'
            value={formData.address || ''}
            onChange={handleChange}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar cambios'}
            </button>
          <button type='button' onClick={() => {setIsEditing(false); setFormData(user); }}>
            Cancelar
          </button>
        </form>
      ) : (
        <div className='profile-details'>
          <p><strong>Nombre:</strong>{user.name}</p>
          <p><strong>Email:</strong>{user.email}</p>
          <p><strong>Dirección:</strong>{user.address || "No especificada"}</p>

          <button onClick={() => setIsEditing(true)}>
            Editar Perfil
          </button>
        </div>
      )}
    </div>
  );
}
 

export default Profile;
