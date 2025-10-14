import React, { useState } from 'react'
import '../../styles/Home.css'
import Button from '../atoms/Button'

export default function Home() {

  

  const imgOptions =[
    {id:1,imgUrl:'images/banner1.png'},
    {id:2,imgUrl:'images/banner2.png'},
    {id:3,imgUrl:'images/banner3.png'}
  ] 

  const [currentImg,setCurrentImg] = useState(1);
  
  const handleClickNext = () => {
    if(currentImg < imgOptions.length){
      setCurrentImg(currentImg + 1);
    }else{
      setCurrentImg(1)
    }
  }

  const handleClickPrev = () => {
    if(currentImg > 1){
      setCurrentImg(currentImg - 1);
    }else{
      setCurrentImg(imgOptions.length)
    }
  }

  const imgPath = imgOptions.find((i) => i.id == currentImg).imgUrl;



  return (
    <main id='home-main'>
      <section>
        <div id="image-carrusel">
          <img src={imgPath} alt={"Imagen Banner Nro." + currentImg} className="carrusel-img active"/>
          <Button 
            text={String.fromCharCode(10094)} 
            id="prev-carrusel" 
            className="carrusel-button"
            onClick ={handleClickPrev}
          />
          <Button 
            text={String.fromCharCode(10095)} 
            id="next-carrusel" 
            className="carrusel-button"
            onClick ={handleClickNext}
          />
        </div>
      </section>
    </main>
  )
}
