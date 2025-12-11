import React, { useEffect, useState } from 'react'
import '../../styles/Profile.css'
import { changeMyPassword, getMyProfile, updateProfile } from '../../services/AuthService';

function Profile() {
  const [user , setUser] = useState(null);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);
  const[isEditing, setIsEditing] = useState(false);
  const[formData, setFormData] = useState({});
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passData, setPassData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });


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
    e.preventDefault()
    try {
    
      const datosActualizados = await updateProfile(user.email, formData);
      
      if (!datosActualizados) {
          throw new Error("El servidor no devolvió los datos actualizados.");
      }

      setUser(prevUser => ({
          ...prevUser, 
          ...datosActualizados 
      })); 

      setIsEditing(false);
      alert("Perfil actualizado correctamente");
      
    } catch (error) {
        console.error(error);
        alert("Error: " + (error?.response?.data || error.message));
    }
  };

  const handlePassChange = (e) => {
      setPassData({ ...passData, [e.target.name]: e.target.value });
    };

  const handlePassSubmit = async (e) => {
    e.preventDefault();

    if (passData.newPassword !== passData.confirmPassword) {
      alert("Las nuevas contraseñas no coinciden.");
      return;
    }

    if (passData.newPassword.length < 5) {
      alert("La nueva contraseña debe tener como mas de 5 caracteres");
      return;
    }

    try {
      await changeMyPassword(passData.currentPassword, passData.newPassword);
      
      alert("Contraseña actualizada con éxito");
      setIsChangingPassword(false);
      setPassData({ currentPassword: '', newPassword: '', confirmPassword: '' });

    } catch (error) {
      const msg = error.response?.data || "Error al cambiar contraseña";
      alert("Error: " + msg);
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
          <div className='actions'>
            <button type="submit" disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar cambios'}
            </button>
            <button type='button' onClick={() => {setIsEditing(false); setFormData(user); }}>
              Cancelar
            </button>
          </div>
          
        </form>
      ) : isChangingPassword ? (
        <form onSubmit={handlePassSubmit} className="password-form">
          <h3>Cambiar Contraseña</h3>
          <div>
            <label>Contraseña Actual:</label>
            <input 
              type="password" 
              name="currentPassword" 
              value={passData.currentPassword} 
              onChange={handlePassChange} 
              required 
            />
          </div>

          <div>
            <label>Nueva Contraseña:</label>
            <input 
              type="password" 
              name="newPassword" 
              value={passData.newPassword} 
              onChange={handlePassChange} 
              required 
            />
          </div>

          <div>
            <label>Confirmar Nueva Contraseña:</label>
            <input 
              type="password" 
              name="confirmPassword" 
              value={passData.confirmPassword} 
              onChange={handlePassChange} 
              required 
            />
          </div>

          <div className="actions">
            <button type="submit">Actualizar Contraseña</button>
            <button type="button" onClick={() => {
                setIsChangingPassword(false);
                setPassData({ currentPassword: '', newPassword: '', confirmPassword: '' });
            }}>
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <div className='profile-details'>
          <p><strong>Nombre:</strong>{user.name}</p>
          <p><strong>Email:</strong>{user.email}</p>
          <p><strong>Dirección:</strong>{user.address || "No especificada"}</p>

          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Editar Datos</button>
            <button onClick={() => setIsChangingPassword(true)} >
              Cambiar Contraseña
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
 

export default Profile;
