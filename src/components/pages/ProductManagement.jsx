import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService';
import ProductForm from '../organisms/ProductForm';
import '../../styles/ProductManagement.css'
import DataTable from '../organisms/DataTable';


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


  const productColumns = [
    { header: 'ID', accessor: 'id' },
    { 
      header: 'Imagen', 
      className: 'img-container',
      render: (product) => <img src={product.imgUrl} alt={product.name} /> 
    },
    { header: 'Producto', accessor: 'name', className: 'td-name' },
    { header: 'Marca', accessor: 'brand' },
    { header: 'Categoría', accessor: 'category' },
    { header: 'Condición', accessor: 'productCondition' },
    { 
      header: 'Precio', 
      render: (product) => `$${Number(product.price).toLocaleString()}` 
    }
  ]

  return (
    <main id="productManagement-main">

      <h1>Inventario</h1>

      {view === 'lista' ? (
        <>
          <button onClick={handleNewProduct} className="btn-add-product">
            + Agregar Producto
          </button>
          <div>
           <DataTable
            data = {products}
            columns = {productColumns}
            onEdit = {handleEditProduct}
            onDelete = {handleDeleteProduct}
           />
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
