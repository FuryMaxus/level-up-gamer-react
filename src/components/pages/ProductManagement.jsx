import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService';
import ProductForm from '../organisms/ProductForm';
import '../../styles/ProductManagement.css'
export default function ProductManagement() {

  const [products,setProducts] = useState([]);
  const [view, setView] = useState('lista'); 
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = () => {
    ProductService.getAllProducts().then(response => {
      setProducts(response.data);
    }).catch(error => {
      console.log("Error fetching products",error);
    });
  }

  const handleDeleteProduct = async (id) => {
    if (window.confirm('¿Seguro que quieres borrarlo?')) {
      try {
        await ProductService.deleteProduct(id); 
        fetchProducts(); 
      } catch (error) {
        console.error("Error al eliminar", error);
      }
    }
  };

  const handleNewProduct = () => {
    setEditingProduct(null); 
    setView('formulario');
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product); 
    setView('formulario');
  };

  const handleSaveProduct = async (data) => {
    try {
      if (editingProduct) {
        await ProductService.updateProduct(data.id,data)
      } else {
        await ProductService.createProduct(data)
      } 
      fetchProducts();
      setView('lista'); 
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  return (
    <main id="productManagement-main">
      <h1>Inventario</h1>

      {view === 'lista' ? (
        <>
          <button onClick={handleNewProduct} className="">
            + Agregar Producto
          </button>
          
  <div>
    <table id='product-table'>

      <thead>
        <tr>
          <th scope="col" >ID</th>
          <th scope="col" >Imagen</th>
          <th scope="col" >Producto</th>
          <th scope="col" >Marca</th>
          <th scope="col" >Categoría</th>
          <th scope="col" >Condición</th>
          <th scope="col" >Precio</th>
          <th scope="col" >Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan="7">No hay productos registrados.</td>
          </tr>
        ) : (
          products.map((prod) => (
            <tr key={prod.id}>
              <td>
                {prod.id}
              </td>
              <td className="img-container">
                <img 
                  src={prod.imgUrl} 
                  alt={prod.name} 
                />
              </td>
              <td className='td-name'>
                {prod.name}
              </td>
              <td>
                {prod.brand}
              </td>
              <td>
                {prod.category}
              </td>
              <td>
                {prod.productCondition}
              </td>
              <td>
                ${Number(prod.price).toLocaleString()}
              </td>
              <td>
                <div className='row-action-buttons'>
                  <button 
                    onClick={() => handleEditProduct(prod)} 
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => handleDeleteProduct(prod.id)} 
                  >
                    Eliminar
                  </button>
                </div>
               
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
        </>
      ) : (
        <ProductForm 
          productToEdit={editingProduct} 
          whenSaving={handleSaveProduct} 
          whenCanceling={() => setView('lista')} 
        />
      )}
    </main>
  )
}
