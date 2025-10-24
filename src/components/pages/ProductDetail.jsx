import React from 'react'
import '../../styles/ProductDetail.css'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext';
import { Products } from '../../data/Products';
import Button from '../atoms/Button';
import ProductReview from '../molecules/ProductReview';
export default function ProductDetail() {

  const {id} = useParams();
  const {addToCart} = useCart();
  const product = Products.find(p => p.id === parseInt(id));

  if (!product) return <p>Producto no encontrado</p>;
  

  const reviews = [
    {
      name: "Carlos",
      date: "12/08/2025",
      stars: 5,
      title: "Velocidad y fluidez desde el primer día",
      body: "Equipo muy rápido y silencioso, arranca en segundos gracias al SSD. Lo uso para trabajo y gaming ligero y no me ha dado ningún problema."
    },
    {
      name: "Fernanda",
      date: "24/08/2025",
      stars: 4,
      title: "Gran relación calidad-precio",
      body: "Excelente relación precio/rendimiento. La RAM de 16GB es más que suficiente para multitarea y los gráficos Vega sorprenden en juegos casuales."
    },
    {
      name: "Anónimo",
      date: "01/09/2025",
      stars: 4,
      title: "Diseño moderno y buena ventilación",
      body: "Me encanta el diseño del gabinete y la ventilación. Se nota la diferencia al editar video, todo corre fluido y sin calentarse demasiado."
    }
  ];

  return (
    <main id='product-detail-main'>
      <section>
        <div id="pic-section">
          <img src={product.imgUrl} alt={product.name}/>
          <div></div>
        </div>
      </section>
      <section id="main-details-sections">
        <div id="primary-info-details">
          <h3>{product.brand}</h3>
          <h1>{product.name}</h1>
          <div id="star-raiting">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        </div>
        <div id="especifics-details-container">
          <div id="producto-list-specifications">
            <h2>Caracteristicas</h2>
            <ul>
              <li>Procesador (CPU): AMD Ryzen 5 4650G (6 núcleos / 12 hilos, hasta 4.2 GHz)</li>
              <li>Gráficos Integrados: Radeon Vega 7 Graphics</li>
              <li>Memoria RAM: 16GB DDR4 (expandible hasta 64GB)</li>
              <li>Almacenamiento: 500GB NVMe SSD (alta velocidad de lectura/escritura)</li>
              <li>Placa Madre: Chipset compatible AM4 (con soporte para futuras actualizaciones)</li>
              <li>Fuente de Poder: 500W certificada (80 Plus)</li>
              <li>Gabinete: ATX/Micro ATX con ventilación optimizada y diseño moderno</li>
              <li>
                Conectividad:
                <ul>
                  <li>Puertos USB 3.0 y 2.0</li>
                  <li>HDMI / DisplayPort</li>
                  <li>Ethernet Gigabit</li>
                  <li>Audio HD integrado</li>
                </ul>
              </li>
              <li>Sistema Operativo: Compatible con Windows 10/11 y distribuciones Linux</li>
                
            </ul>
          </div>
            <div id="vertical-line"></div>
            <div id="detail-price-container">
              <h2>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(product.price)}</h2>
          
              <Button text='Añadir al Carro' onClick={() => {addToCart(product)}}/>
              <Button text='Comprar ahora'/>
              <Button text='Usar Puntos'/>

            
              <div id="share-product-container">
                <h3>Compartir</h3>
                <div className="contact-links-container" id="share-links-container">
                  <a href="#"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section id="reviews-main-container">
        <h1>Opiniones del Producto</h1>
        <hr/>
        <div id="reviews-container-content">
          <div id="reviews-container-left"> 
            <div id="review-puntation"> 
              <h2>4.0</h2>
              <div>
                <div id="star-raiting">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p>57 Reseñas</p>
              </div> 
            </div>
            <article id="calification-graph">
              <h3>Calificaciones</h3>
              <div>
                <button><i className="fa-solid fa-star"></i>5</button>
                <div className="calification-graph-bar">
                    <div id="five-star-bar-content"></div>
                </div>
                <span className="calification-graph-bar-value">23</span>
              </div>
              <div>
                <button><i className="fa-solid fa-star"></i>4</button>
                <div className="calification-graph-bar">
                    <div id="four-star-bar-content"></div>
                </div>
                <span className="calification-graph-bar-value">20</span>
              </div>
              <div>
                <button><i className="fa-solid fa-star"></i>3</button>
                <div className="calification-graph-bar">
                    <div id="three-star-bar-content"></div>
                </div>
                <span className="calification-graph-bar-value">7</span>
              </div>
              <div>
                <button><i className="fa-solid fa-star"></i>2</button>
                <div className="calification-graph-bar">
                    <div id="two-star-bar-content"></div>
                </div>
                <span className="calification-graph-bar-value">5</span>
              </div>
              <div>
                <button><i className="fa-solid fa-star"></i>1</button>
                <div className="calification-graph-bar">
                    <div id="one-star-bar-content"></div>
                </div>
                <span className="calification-graph-bar-value">2</span>
              </div>
            </article>
          </div>
          <div id="reviews-container-right">
            <div id="review-filterer-container">
              <h3>Filtrar reseñas por: </h3>
              <div>
                <button><i className="fa-solid fa-star"></i>5</button>
                <button><i className="fa-solid fa-star"></i>4</button>
                <button><i className="fa-solid fa-star"></i>3</button>
                <button><i className="fa-solid fa-star"></i>2</button>
                <button><i className="fa-solid fa-star"></i>1</button>
              </div>
              <p>3 de 30 reseñas</p>
            </div>

            {reviews.map((review, index) => (
              <ProductReview key={index} {...review} />
            ))}

            <button id="button-show-more-reviews">Mostrar todas las reseñas <i className="fa-solid fa-arrow-down"></i></button>
          </div>
        </div>
      </section>
    </main>
  )
}
