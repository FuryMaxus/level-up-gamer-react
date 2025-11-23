import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService';
import ProductForm from '../organisms/ProductForm';

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
    <div className="p-5">
      <h1>Inventario</h1>

      {view === 'lista' ? (
        <>
          <button onClick={handleNewProduct} className="bg-green-500 text-white p-2 mb-4">
            + Agregar Producto
          </button>
          
          <ul>
            {products.map((prod) => (
              <li key={prod.id} className="flex justify-between border-b p-2">
                <span>{prod.name} - ${prod.price}</span>
                <div>
                  <button onClick={() => handleEditProduct(prod)} className="text-blue-500 mr-2">Editar</button>
                  <button onClick={() => handleDeleteProduct(prod.id)} className="text-red-500">Borrar</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ProductForm 
          productToEdit={editingProduct} 
          whenSaving={handleSaveProduct} 
          whenCanceling={() => setView('lista')} 
        />
      )}
    </div>
  )
}
