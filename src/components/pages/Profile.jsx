import React, { use, useEffect, useState } from 'react'
import '../../styles/Profile.css'
import { getMyProfile, updateMyProfile } from '../../services/AuthService';

 function Profile() {
  const [user , setUser] = useState(null);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);
  const[isEditing, setIsEditing] = useState(false);
  const[formData, setFormData] = useState({});

  const fetchUserData = async () => {
    try{
      getMyProfile().then(response => {
        setUser(response.data);
        setFormData(response.data);
      })
      setLoading(false);
    }catch(err) {
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
      updateMyProfile(formData).then(response => {
        setUser(response.data);
        setIsEditing(false);
      });
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
          <p><strong>Email:</strong> {user.email}</p>
          <div>
            <label>Direccion:</label>
            <input
            type='text'
            name='address'
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
