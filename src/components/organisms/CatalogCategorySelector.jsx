import React from 'react'
import Button from '../atoms/Button'

export default function CatalogCategorySelector() {
  return (
    <div id="category-selector-container">

        <Button text='PCs Gamer' variant="btn-category current-category" img={true} imgPath="images/pc_gamer_example.png" />
        <Button text='Juegos de mesa' variant="btn-category" img={true} imgPath="images/table_top_game_example.png" />
        <Button text='Accesorios' variant="btn-category" img={true} imgPath="images/accesories_example.png" />
        <Button text='Consolas' variant="btn-category" img={true} imgPath="images/console_example.png" />
        <Button text='Sillas Gamer' variant="btn-category" img={true} imgPath="images/game_chair_example.png" />
        <Button text='Mouses' variant="btn-category" img={true} imgPath="images/mouse_example.webp" />
        <Button text='Mousepads' variant="btn-category" img={true} imgPath="images/mousepad_example.webp" />
        <Button text='Poleras' variant="btn-category" img={true} imgPath="images/polera_example.webp" />
        <Button text='Polerones' variant="btn-category" img={true} imgPath="images/poleron_example.png" />
        <Button text='Servicio Técnico' variant="btn-category" img={true} imgPath="images/servicio_tecnico.png" />

    </div>
  )
}
