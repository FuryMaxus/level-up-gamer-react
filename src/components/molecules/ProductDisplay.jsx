import React from 'react'
import Button from '../atoms/Button';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';


export default function ProductDisplay(props) {

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const {product} = props;
  

  const handleDivClick = () => {
    navigate(`/catalogo/detalle/${product.id}`);
  }

  const handleButtonClick = (e) => {
    e.stopPropagation();
    addToCart(product);
  }


  return (
    <div className="product" onClick={handleDivClick}> 
      <img src={product.imgUrl} alt= {product.name} />
      <div className="product-info">
          <p>{product.brand}</p>
          <p>{product.name}</p>
          <p>{correctConditionText(product.condition)}</p>
          <p>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(product.price)}</p>
      </div>
      <Button text='Añadir al carro' onClick={handleButtonClick} />
    </div>
  )
}

function correctConditionText(t){
  if(t == 'new'){
    return "Nuevo"
  }else if(t == 'open'){
    return "Caja abierta"
  }else if(t == 'second'){
    return "Segunda mano"
  }
}