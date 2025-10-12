import React, { useEffect, useMemo, useState } from 'react'
import '../../styles/Catalog.css'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import CatalogLateralMenu from '../organisms/CatalogLateralMenu'
import ProductGrid from '../organisms/ProductGrid'
import CatalogCategorySelector from '../organisms/CatalogCategorySelector'
import { Categories } from '../../data/Categories'
import PaginationNav from '../molecules/PaginationNav'
import { Products } from '../../data/Products'


export default function Catalog() {

  const [category, setCategory] = useState(Categories.PC_GAMERS);
  const [brand, setBrand] = useState("all");
  const [condition, setCondition] = useState("all");
  const productsFilterByCategory = Products.filter((p) => p.category === category);
  
  const brandSet = new Set(productsFilterByCategory.map((p) => p.brand));

  const maxPrice = useMemo(() => {

    if (!productsFilterByCategory.length) return 0;

    return productsFilterByCategory.reduce(
      (max, p) => Math.max(max, p.price),
      -Infinity
    );

  }, [productsFilterByCategory]);
  

  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  useEffect(() => {
    setSelectedPrice(maxPrice);
  }, [maxPrice]);

  const [sortOption,setSortOption] = useState("recomended");

  const productsFinal = productsFilterByCategory
    .filter((p) => 
      (brand === "all" || p.brand === brand) && 
      (condition === "all" || p.condition === condition) &&
      (p.price <= selectedPrice))
    .slice()
    .sort( (a,b) =>{
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      return 0;
    });


  return (
    <>
      <Header/>
      <main id='catalog-main'>
        <CatalogLateralMenu
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
          condition={condition}
          setCondition={setCondition}
          brandSet = {brandSet}
          products = {productsFinal}
          setSelectedPrice = {setSelectedPrice}
          selectedPrice = {selectedPrice}
          maxPrice = {maxPrice}
        />
        <section id="main-catalog-container">
          <CatalogCategorySelector category={category} setCategory={setCategory} setBrand={setBrand}/>
          <div id="top-menu" className="vertical-catalog-menu-container">
            <select value={sortOption} onChange={e => setSortOption(e.target.value)}> 
              <option value="recommended">Recomendado</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
            </select>
            <PaginationNav />
          </div>
          <div id="product-grid">
            <ProductGrid products={productsFinal}/>
          </div>
          <div id="bottom-menu" className="vertical-catalog-menu-container">
            <PaginationNav />
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
