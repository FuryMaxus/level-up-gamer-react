import React, { useEffect, useState } from 'react'
import { Conditions } from '../../data/Conditions';
import { Categories } from '../../data/Categories';


export default function ProductForm(props) {

  const { productToEdit, whenSaving, whenCanceling} = props;

  const initialFormState = {
    name: '',
    price: '',
    brand: '',
    productCondition: 'NEW', 
    category: Categories.PC_GAMERS,
    imgUrl: ''
  };

  const [data, setData] = useState(initialFormState);

  useEffect(() => {
    if (productToEdit) {
      setData(productToEdit);
    } else {
      setData(initialFormState); 
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    whenSaving(data); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <div className="product-form-container">
      <h3>{productToEdit ? 'Editar Producto' : 'Nuevo Producto'}</h3>
      
      <form onSubmit={handleSubmit}>
        <div className='productForm-input-conteiner'>
          <label htmlFor="name">Nombre</label>
          <input 
            name="name"
            type="text" 
            placeholder="Nombre" 
            value={data.name}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="productForm-input-conteiner">
          <label htmlFor="price">Precio</label>
          <input 
          name="price"
          type="number" 
          placeholder="Precio" 
          value={data.price}
          onChange={handleChange}
          required 
        />
        </div>

        <div className="productForm-input-conteiner">
          <label htmlFor="brand">Marca</label>
          <input 
          name="brand"
          type="text" 
          placeholder="Marca" 
          value={data.brand}
          onChange={handleChange}
          required 
        />
        </div>
        
        <div className="productForm-selectors-container">

          <div className='productForm-selector'>
            <label className="">Condición</label>
            <select
              name="productCondition"
              value={data.productCondition}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-white"
            >
              {Object.entries(Conditions).map(([backendKey, frontendLabel]) => (
                <option key={backendKey} value={backendKey}>
                  {frontendLabel}  
                </option>
              ))}
            </select>
          </div>

          <div className='productForm-selector'>
            <label>Categoría</label>
            <select
              name="category"
              value={data.category}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-white"
            >
              {Object.values(Categories).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="productForm-input-conteiner">
          <label htmlFor="imgUrl">URL de la imagen</label>
          <input 
          name="imgUrl"
          type="text" 
          placeholder="Url de imagen" 
          value={data.imgUrl}
          onChange={handleChange}
          required 
        />
        </div>
        

        <div className="productForm-buttons-container">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {productToEdit ? 'Actualizar' : 'Guardar'}
          </button>
          <button type="button" onClick={whenCanceling} className="ml-2 p-2">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

                   