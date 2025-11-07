import { Categories } from "./Categories";








/*
export const Products = [

    { id: 1, name: "PC Gamer ASUS ROG Strix G15 / Ryzen 7 5800X / RTX 4070 / 32GB RAM / 1TB NVMe", price: 1499999, category: Categories.PC_GAMERS, imgUrl: "https://static.vecteezy.com/system/resources/previews/048/412/781/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png", brand: "ASUS", condition: "new" },
  { id: 2, name: "PC Gamer MSI Aegis ZS / Ryzen 5 5600 / RX 6700 XT / 16GB RAM / 1TB SSD", price: 1099999, category: Categories.PC_GAMERS, imgUrl: "https://static.vecteezy.com/system/resources/previews/048/412/781/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png", brand: "MSI", condition: "open" },
  { id: 3, name: "PC HP Omen 40L / Intel i7-13700KF / RTX 4070 Ti / 32GB RAM / 1TB SSD", price: 1899999, category: Categories.PC_GAMERS, imgUrl: "https://static.vecteezy.com/system/resources/previews/048/412/781/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png", brand: "HP Omen", condition: "second" },
  { id: 4, name: "Lenovo Legion T5 / Ryzen 7 7700 / RTX 4060 / 16GB RAM / 1TB SSD", price: 1249999, category: Categories.PC_GAMERS, imgUrl: "https://static.vecteezy.com/system/resources/previews/048/412/781/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png", brand: "Lenovo Legion", condition: "new" },
  { id: 5, name: "NZXT Player One / Ryzen 5 7600 / RTX 4070 / 16GB RAM / 1TB SSD", price: 1349999, category: Categories.PC_GAMERS, imgUrl: "https://static.vecteezy.com/system/resources/previews/048/412/781/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png", brand: "NZXT", condition: "open" },
  { id: 6, name: "Acer Predator Orion 3000 / i5-13400F / RTX 4060 / 16GB / 512GB SSD", price: 999999, category: Categories.PC_GAMERS, imgUrl: "https://static.vecteezy.com/system/resources/previews/048/412/781/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png", brand: "Acer Predator", condition: "second" },
  { id: 7, name: "Corsair Vengeance i7400 / i7-13700K / RTX 4080 / 32GB / 2TB SSD", price: 2099999, category: Categories.PC_GAMERS, imgUrl: "https://static.vecteezy.com/system/resources/previews/048/412/781/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png", brand: "Corsair", condition: "new" },
  { id: 8, name: "Gigabyte AORUS Model X / Ryzen 9 7900X / RTX 4080 / 32GB / 1TB SSD", price: 2199999, category: Categories.PC_GAMERS, imgUrl: "https://static.vecteezy.com/system/resources/previews/048/412/781/non_2x/modern-gaming-pc-isolated-on-transparent-free-png.png", brand: "Gigabyte", condition: "open" },

  { id: 9, name: "Juego de mesa Monopoly", price: 15000, category: Categories.BOARD_GAMES, imgUrl: "https://www.pngmart.com/files/23/Chess-Board-PNG-Photos.png", brand: "Hasbro", condition: "new" },
  { id: 10, name: "Juego de mesa Catan", price: 25000, category: Categories.BOARD_GAMES, imgUrl: "https://www.pngmart.com/files/23/Chess-Board-PNG-Photos.png", brand: "Devir", condition: "open" },
  { id: 11, name: "Juego de mesa Uno", price: 8000, category: Categories.BOARD_GAMES, imgUrl: "https://www.pngmart.com/files/23/Chess-Board-PNG-Photos.png", brand: "Mattel", condition: "second" },
  { id: 12, name: "Juego de mesa Jenga", price: 12000, category: Categories.BOARD_GAMES, imgUrl: "https://www.pngmart.com/files/23/Chess-Board-PNG-Photos.png", brand: "Hasbro", condition: "new" },
  { id: 13, name: "Juego de mesa Pandemic", price: 20000, category: Categories.BOARD_GAMES, imgUrl: "https://www.pngmart.com/files/23/Chess-Board-PNG-Photos.png", brand: "Z-Man Games", condition: "open" },
  { id: 14, name: "Juego de mesa Ticket to Ride", price: 22000, category: Categories.BOARD_GAMES, imgUrl: "https://www.pngmart.com/files/23/Chess-Board-PNG-Photos.png", brand: "Days of Wonder", condition: "second" },
  { id: 15, name: "Juego de mesa Risk", price: 18000, category: Categories.BOARD_GAMES, imgUrl: "https://www.pngmart.com/files/23/Chess-Board-PNG-Photos.png", brand: "Hasbro", condition: "new" },
  { id: 16, name: "Juego de mesa Clue", price: 16000, category: Categories.BOARD_GAMES, imgUrl: "https://www.pngmart.com/files/23/Chess-Board-PNG-Photos.png", brand: "Hasbro", condition: "open" },

  { id: 17, name: "Audífonos gaming", price: 55000, category: Categories.ACCESORIES, imgUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/audifonos-inalambricos-3d-icon-png-download-12046135.png", brand: "HyperX", condition: "new" },
  { id: 18, name: "Teclado mecánico RGB", price: 85000, category: Categories.ACCESORIES, imgUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/audifonos-inalambricos-3d-icon-png-download-12046135.png", brand: "Razer", condition: "open" },
  { id: 19, name: "Soporte para auriculares", price: 15000, category: Categories.ACCESORIES, imgUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/audifonos-inalambricos-3d-icon-png-download-12046135.png", brand: "Cooler Master", condition: "second" },
  { id: 20, name: "Cable HDMI 2.1", price: 10000, category: Categories.ACCESORIES, imgUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/audifonos-inalambricos-3d-icon-png-download-12046135.png", brand: "Belkin", condition: "new" },
  { id: 21, name: "Control multimedia", price: 20000, category: Categories.ACCESORIES, imgUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/audifonos-inalambricos-3d-icon-png-download-12046135.png", brand: "Logitech", condition: "open" },
  { id: 22, name: "Micrófono USB", price: 65000, category: Categories.ACCESORIES, imgUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/audifonos-inalambricos-3d-icon-png-download-12046135.png", brand: "Blue", condition: "second" },
  { id: 23, name: "Base de refrigeración", price: 25000, category: Categories.ACCESORIES, imgUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/audifonos-inalambricos-3d-icon-png-download-12046135.png", brand: "Cooler Master", condition: "new" },
  { id: 24, name: "Lámpara LED RGB", price: 18000, category: Categories.ACCESORIES, imgUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/audifonos-inalambricos-3d-icon-png-download-12046135.png", brand: "Xiaomi", condition: "open" },

  { id: 25, name: "PlayStation 5", price: 499999, category: Categories.CONSOLES, imgUrl: "https://tienda.clarochile.cl/wcsstore/CLAROCL_CAT_AS/Equipos/PS5_PRO_DIGITAL/PS5_PRO_DIGITAL_1_1170x1500.png", brand: "Sony", condition: "new" },
  { id: 26, name: "Xbox Series X", price: 499999, category: Categories.CONSOLES, imgUrl: "https://tienda.clarochile.cl/wcsstore/CLAROCL_CAT_AS/Equipos/PS5_PRO_DIGITAL/PS5_PRO_DIGITAL_1_1170x1500.png", brand: "Microsoft", condition: "open" },
  { id: 27, name: "Nintendo Switch OLED", price: 399999, category: Categories.CONSOLES, imgUrl: "https://tienda.clarochile.cl/wcsstore/CLAROCL_CAT_AS/Equipos/PS5_PRO_DIGITAL/PS5_PRO_DIGITAL_1_1170x1500.png", brand: "Nintendo", condition: "second" },
  { id: 28, name: "PlayStation 4 Pro", price: 299999, category: Categories.CONSOLES, imgUrl: "https://tienda.clarochile.cl/wcsstore/CLAROCL_CAT_AS/Equipos/PS5_PRO_DIGITAL/PS5_PRO_DIGITAL_1_1170x1500.png", brand: "Sony", condition: "new" },
  { id: 29, name: "Xbox One S", price: 249999, category: Categories.CONSOLES, imgUrl: "https://tienda.clarochile.cl/wcsstore/CLAROCL_CAT_AS/Equipos/PS5_PRO_DIGITAL/PS5_PRO_DIGITAL_1_1170x1500.png", brand: "Microsoft", condition: "open" },
  { id: 30, name: "Nintendo Switch Lite", price: 249999, category: Categories.CONSOLES, imgUrl: "https://tienda.clarochile.cl/wcsstore/CLAROCL_CAT_AS/Equipos/PS5_PRO_DIGITAL/PS5_PRO_DIGITAL_1_1170x1500.png", brand: "Nintendo", condition: "second" },
  { id: 31, name: "Steam Deck", price: 599999, category: Categories.CONSOLES, imgUrl: "https://tienda.clarochile.cl/wcsstore/CLAROCL_CAT_AS/Equipos/PS5_PRO_DIGITAL/PS5_PRO_DIGITAL_1_1170x1500.png", brand: "Valve", condition: "new" },
  { id: 32, name: "Retro Mini NES", price: 99999, category: Categories.CONSOLES, imgUrl: "https://tienda.clarochile.cl/wcsstore/CLAROCL_CAT_AS/Equipos/PS5_PRO_DIGITAL/PS5_PRO_DIGITAL_1_1170x1500.png", brand: "Nintendo", condition: "open" },

  { id: 33, name: "Silla gamer Cougar Armor", price: 99999, category: Categories.CHAIRS, imgUrl: "https://www.publicdomainpictures.net/pictures/410000/velka/small-rocking-chair.png", brand: "Cougar", condition: "new" },
  { id: 34, name: "Silla gamer Secretlab Titan", price: 299999, category: Categories.CHAIRS, imgUrl: "https://www.publicdomainpictures.net/pictures/410000/velka/small-rocking-chair.png", brand: "Secretlab", condition: "open" },
  { id: 35, name: "Silla ergonómica DXRacer", price: 249999, category: Categories.CHAIRS, imgUrl: "https://www.publicdomainpictures.net/pictures/410000/velka/small-rocking-chair.png", brand: "DXRacer", condition: "second" },
  { id: 36, name: "Silla gamer Razer Iskur", price: 349999, category: Categories.CHAIRS, imgUrl: "https://www.publicdomainpictures.net/pictures/410000/velka/small-rocking-chair.png", brand: "Razer", condition: "new" },
  { id: 37, name: "Silla gamer Nitro Concepts", price: 229999, category: Categories.CHAIRS, imgUrl: "https://www.publicdomainpictures.net/pictures/410000/velka/small-rocking-chair.png", brand: "Nitro Concepts", condition: "open" },
  { id: 38, name: "Silla gamer ThunderX3", price: 199999, category: Categories.CHAIRS, imgUrl: "https://www.publicdomainpictures.net/pictures/410000/velka/small-rocking-chair.png", brand: "ThunderX3", condition: "second" },
  { id: 39, name: "Silla gamer Noblechairs Hero", price: 399999, category: Categories.CHAIRS, imgUrl: "https://www.publicdomainpictures.net/pictures/410000/velka/small-rocking-chair.png", brand: "Noblechairs", condition: "new" },
  { id: 40, name: "Silla gamer Vertagear", price: 259999, category: Categories.CHAIRS, imgUrl: "https://www.publicdomainpictures.net/pictures/410000/velka/small-rocking-chair.png", brand: "Vertagear", condition: "open" },

  { id: 41, name: "Mouse Logitech G Pro", price: 59999, category: Categories.MOUSES, imgUrl: "https://freesvg.org/img/1290237348.png", brand: "Logitech", condition: "new" },
  { id: 42, name: "Mouse Razer DeathAdder", price: 49999, category: Categories.MOUSES, imgUrl: "https://freesvg.org/img/1290237348.png", brand: "Razer", condition: "open" },
  { id: 43, name: "Mouse SteelSeries Rival 3", price: 39999, category: Categories.MOUSES, imgUrl: "https://freesvg.org/img/1290237348.png", brand: "Corsair", condition: "new" },
  { id: 45, name: "Mouse HyperX Pulsefire", price: 45999, category: Categories.MOUSES, imgUrl: "https://freesvg.org/img/1290237348.png", brand: "HyperX", condition: "open" },
  { id: 46, name: "Mouse Cooler Master MM711", price: 39999, category: Categories.MOUSES, imgUrl: "https://freesvg.org/img/1290237348.png", brand: "Cooler Master", condition: "second" },
  { id: 47, name: "Mouse Glorious Model O", price: 69999, category: Categories.MOUSES, imgUrl: "https://freesvg.org/img/1290237348.png", brand: "Glorious", condition: "new" },
  { id: 48, name: "Mouse Redragon Cobra", price: 29999, category: Categories.MOUSES, imgUrl: "https://freesvg.org/img/1290237348.png", brand: "Redragon", condition: "open" },

  { id: 49, name: "Mousepad Razer Goliathus", price: 15999, category: Categories.MOUSE_PADS, imgUrl: "https://public-content.dezctop.com/media/46f5902182bb41c585d09f91f8fe66d3/water-resistant-mousepad-nq350-black.webp", brand: "Razer", condition: "new" },
  { id: 50, name: "Mousepad Logitech G240", price: 14999, category: Categories.MOUSE_PADS, imgUrl: "https://public-content.dezctop.com/media/46f5902182bb41c585d09f91f8fe66d3/water-resistant-mousepad-nq350-black.webp", brand: "Logitech", condition: "open" },
  { id: 51, name: "Mousepad SteelSeries QcK", price: 13999, category: Categories.MOUSE_PADS, imgUrl: "https://public-content.dezctop.com/media/46f5902182bb41c585d09f91f8fe66d3/water-resistant-mousepad-nq350-black.webp", brand: "SteelSeries", condition: "second" },
  { id: 52, name: "Mousepad Corsair MM300", price: 16999, category: Categories.MOUSE_PADS, imgUrl: "https://public-content.dezctop.com/media/46f5902182bb41c585d09f91f8fe66d3/water-resistant-mousepad-nq350-black.webp", brand: "Corsair", condition: "new" },
  { id: 53, name: "Mousepad HyperX Fury S", price: 17999, category: Categories.MOUSE_PADS, imgUrl: "https://public-content.dezctop.com/media/46f5902182bb41c585d09f91f8fe66d3/water-resistant-mousepad-nq350-black.webp", brand: "HyperX", condition: "open" },
  { id: 54, name: "Mousepad Redragon Kunlun", price: 10999, category: Categories.MOUSE_PADS, imgUrl: "https://public-content.dezctop.com/media/46f5902182bb41c585d09f91f8fe66d3/water-resistant-mousepad-nq350-black.webp", brand: "Redragon", condition: "second" },
  { id: 55, name: "Mousepad Glorious XXL", price: 19999, category: Categories.MOUSE_PADS, imgUrl: "https://public-content.dezctop.com/media/46f5902182bb41c585d09f91f8fe66d3/water-resistant-mousepad-nq350-black.webp", brand: "Glorious", condition: "new" },
  { id: 56, name: "Mousepad MSI Agility GD60", price: 18999, category: Categories.MOUSE_PADS, imgUrl: "https://public-content.dezctop.com/media/46f5902182bb41c585d09f91f8fe66d3/water-resistant-mousepad-nq350-black.webp", brand: "MSI", condition: "open" },

  { id: 64, name: "Polera RGB Gamer", price: 19000, category: Categories.SHIRTS, imgUrl: "http://res.publicdomainfiles.com/pdf_view/82/13938536412285.png", brand: "Level-Up Gamer", condition: "new" },
  { id: 65, name: "Polera Geek Mode", price: 19000, category: Categories.SHIRTS, imgUrl: "http://res.publicdomainfiles.com/pdf_view/82/13938536412285.png", brand: "Level-Up Gamer", condition: "open" },
  { id: 66, name: "Polera Esports Team", price: 19000, category: Categories.SHIRTS, imgUrl: "http://res.publicdomainfiles.com/pdf_view/82/13938536412285.png", brand: "Level-Up Gamer", condition: "second" },
  { id: 67, name: "Polera Retro Games", price: 19000, category: Categories.SHIRTS, imgUrl: "http://res.publicdomainfiles.com/pdf_view/82/13938536412285.png", brand: "Level-Up Gamer", condition: "new" },

  { id: 68, name: "Polerón Esports", price: 24000, category: Categories.HOODIES, imgUrl: "http://res.publicdomainfiles.com/pdf_view/83/13939128615013.png", brand: "Level-Up Gamer", condition: "new" },
  { id: 69, name: "Polerón Gamer Style", price: 24000, category: Categories.HOODIES, imgUrl: "http://res.publicdomainfiles.com/pdf_view/83/13939128615013.png", brand: "Level-Up Gamer", condition: "open" },
  { id: 70, name: "Polerón Retro Pixel", price: 24000, category: Categories.HOODIES, imgUrl: "http://res.publicdomainfiles.com/pdf_view/83/13939128615013.png", brand: "Level-Up Gamer", condition: "second" },
  { id: 71, name: "Polerón RGB", price: 24000, category: Categories.HOODIES, imgUrl: "http://res.publicdomainfiles.com/pdf_view/83/13939128615013.png", brand: "Level-Up Gamer", condition: "new" },
  { id: 72, name: "Polerón Minimal", price: 24000, category: Categories.HOODIES, imgUrl: "http://res.publicdomainfiles.com/pdf_view/83/13939128615013.png", brand: "Level-Up Gamer", condition: "open" },
  { id: 73, name: "Polerón Oversize", price: 24000, category: Categories.HOODIES, imgUrl: "http://res.publicdomainfiles.com/pdf_view/83/13939128615013.png", brand: "Level-Up Gamer", condition: "second" },
  { id: 74, name: "Polerón Classic", price: 24000, category: Categories.HOODIES, imgUrl: "http://res.publicdomainfiles.com/pdf_view/83/13939128615013.png", brand: "Level-Up Gamer", condition: "new" },
  { id: 75, name: "Polerón HoodieX", price: 24000, category: Categories.HOODIES, imgUrl: "http://res.publicdomainfiles.com/pdf_view/83/13939128615013.png", brand: "Level-Up Gamer", condition: "open" }
];
*/
