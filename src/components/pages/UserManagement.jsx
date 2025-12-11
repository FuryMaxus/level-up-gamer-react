import React, { useEffect, useState } from 'react'
import '../../styles/ProductManagement.css';
import UserCreatorForm from '../organisms/UserCreatorForm';
import DataTable from '../organisms/DataTable';
import { createUserByAdmin, deleteUser, getAllUsers } from '../../services/AuthService';


export default function UserManagement() {

  const [users, setUsers] = useState([]);
  const [view, setView] = useState('lista'); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetchUsers();
    }, []);

  const fetchUsers = () => {
    setLoading(true);
    getAllUsers().then(data => {
      setUsers(data);
      setLoading(false);
    }).catch(error => {
      console.log("Error fetching users", error);
      setLoading(false);
    });
  }

  const handleDeleteUser = async (emailTarget) => {
    if (window.confirm(`¿Seguro que quieres eliminar al usuario ${emailTarget}?`)) {
      try {
        await deleteUser(emailTarget); 
        fetchUsers(); 
      } catch (error) {
        alert("Error al eliminar. Ver consola.");
      }
    }
  };  

  const handleNewUser = () => {
    setView('formulario');
  };

  const handleSaveUser = async (formData) => {
      try {
          const payload = {
              username: formData.username,
              correo: formData.email,      
              password: formData.password,
              rol: formData.rol           
          };
          
          await createUserByAdmin(payload);
          alert("Usuario creado exitosamente");
          
          fetchUsers();
          setView('lista'); 

      } catch (error) {
        const msg = error.response?.data || "Fallo al crear usuario";
        alert("Error: " + msg);
      }
    };

  const userColumns = [
    { header: 'Nombre', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Dirección', accessor: 'address', render: (u) => u.address || "-" },
    { header: 'Rol', render: (u) => <span style={{fontWeight: 'bold'}}>{u.rol || u.roles?.[0]}</span> }
  ];


  return (
    <main id="productManagement-main">
      <h1>Gestión de Usuarios</h1>

      {view === 'lista' ? (
        <>
          <button onClick={handleNewUser} className="btn-add-product">
            + Nuevo Usuario
          </button>
    
          <DataTable
            data={users}
            columns={userColumns}
            onDelete={(row) => handleDeleteUser(row.email)}
            onEdit = {() => {}}
           />
        </>
      ) : (
        <UserCreatorForm 
          whenSaving={handleSaveUser} 
          whenCanceling={() => setView('lista')} 
        />
      )}
    </main>
  )
}
