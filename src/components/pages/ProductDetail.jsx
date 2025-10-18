import React from 'react'
import '../../styles/ProductDetail.css'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext';
import { Products } from '../../data/Products';
import Button from '../atoms/Button';
export default function ProductDetail() {

  const {id} = useParams();
  const {addToCart} = useCart();
  const product = Products.find(p => p.id === parseInt(id));

  if (!product) return <p>Producto no encontrado</p>;
  
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
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
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
                <div class="contact-links-container" id="share-links-container">
                  <a href="#"><i class="fa-brands fa-facebook"></i></a>
                  <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                  <a href="#"><i class="fa-brands fa-tiktok"></i></a>
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
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                  </div>
                  <p>57 Reseñas</p>
              </div> 
            </div>
            <article id="calification-graph">
              <h3>Calificaciones</h3>
              <div>
                <button><i class="fa-solid fa-star"></i>5</button>
                <div class="calification-graph-bar">
                    <div id="five-star-bar-content"></div>
                </div>
                <span class="calification-graph-bar-value">23</span>
              </div>
              <div>
                <button><i class="fa-solid fa-star"></i>4</button>
                <div class="calification-graph-bar">
                    <div id="four-star-bar-content"></div>
                </div>
                <span class="calification-graph-bar-value">20</span>
              </div>
              <div>
                <button><i class="fa-solid fa-star"></i>3</button>
                <div class="calification-graph-bar">
                    <div id="three-star-bar-content"></div>
                </div>
                <span class="calification-graph-bar-value">7</span>
              </div>
              <div>
                <button><i class="fa-solid fa-star"></i>2</button>
                <div class="calification-graph-bar">
                    <div id="two-star-bar-content"></div>
                </div>
                <span class="calification-graph-bar-value">5</span>
              </div>
              <div>
                <button><i class="fa-solid fa-star"></i>1</button>
                <div class="calification-graph-bar">
                    <div id="one-star-bar-content"></div>
                </div>
                <span class="calification-graph-bar-value">2</span>
              </div>
            </article>
          </div>
          <div id="reviews-container-right">
            <div id="review-filterer-container">
              <h3>Filtrar reseñas por: </h3>
              <div>
                <button><i class="fa-solid fa-star"></i>5</button>
                <button><i class="fa-solid fa-star"></i>4</button>
                <button><i class="fa-solid fa-star"></i>3</button>
                <button><i class="fa-solid fa-star"></i>2</button>
                <button><i class="fa-solid fa-star"></i>1</button>
              </div>
              <p>3 de 30 reseñas</p>
            </div>
            <div class="user-review-container">
                <h4>Carlos</h4>
                <div>
                    <div class="user-review-star-ranking">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p>12/08/2025</p>
                </div>
                <h3>Velocidad y fluidez desde el primer día</h3>
                <p>
                    Equipo muy rápido y silencioso, arranca en segundos gracias al SSD.
                    Lo uso para trabajo y gaming ligero y no me ha dado ningún problema.
                </p>
            </div>
            <button>Denunciar</button>
            <hr/>
            <div class="user-review-container">
                <h4>Fernanda</h4>
                <div>
                    <div class="user-review-star-ranking">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <p>24/08/2025</p>
                </div>
                <h3>Gran relación calidad-precio</h3>
                <p>
                    Excelente relación precio/rendimiento. La RAM de 16GB es más que suficiente para multitarea
                    y los gráficos Vega sorprenden en juegos casuales.
                </p>
            </div>
            <button>Denunciar</button>
            <hr/>
            <div class="user-review-container">
                <h4></h4>
                <div>
                    <div class="user-review-star-ranking">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <p>01/09/2025</p>
                </div>
                <h3>Diseño moderno y buena ventilación</h3>
                <p>
                    Me encanta el diseño del gabinete y la ventilación. Se nota la diferencia al editar video,
                    todo corre fluido y sin calentarse demasiado.
                </p>
            </div>
            <button>Denunciar</button>
            <hr/>
            <button id="button-show-more-reviews">Mostrar todas las reseñas <i class="fa-solid fa-arrow-down"></i></button>
          </div>
        </div>
      </section>
    </main>
  )
}
