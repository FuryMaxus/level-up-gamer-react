import React from 'react'
import Button from '../atoms/Button'
import clsx from 'clsx';
import { Categories } from '../../data/Categories';

export default function CatalogCategorySelector(props) {
  const {category,setCategory,setBrand} = props;
 
  const categoryButtonsData = [
    { label: "PCs Gamer", value: Categories.PC_GAMERS, img: "images/pc_gamer_example.png" },
    { label: "Juegos de mesa", value: Categories.BOARD_GAMES, img: "images/table_top_game_example.png" },
    { label: "Accesorios", value: Categories.ACCESORIES, img: "images/accesories_example.png" },
    { label: "Consolas", value: Categories.CONSOLES, img: "images/console_example.png" },
    { label: "Sillas Gamer", value: Categories.CHAIRS, img: "images/game_chair_example.png" },
    { label: "Mouses", value: Categories.MOUSES, img: "images/mouse_example.webp" },
    { label: "Mousepads", value: Categories.MOUSE_PADS, img: "images/mousepad_example.webp" },
    { label: "Poleras", value: Categories.SHIRTS, img: "images/polera_example.webp" },
    { label: "Polerones", value: Categories.HOODIES, img: "images/poleron_example.png" },
    { label: "Servicio Técnico", value: "Servicio Técnico", img: "images/servicio_tecnico.png" },
  ];


  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
    setBrand("all");
  }


  return (
    <div id="category-selector-container">

      {categoryButtonsData.map((c) => (
          <Button
            key={c.value}
            onClick={() => handleCategoryClick(c.value)}
            text={c.label}
            className={clsx(
              "btn-category", {"current-category": category === c.value}
            )}
            img
            imgPath={c.img}
          />

        ))}

    </div>
  )
}
