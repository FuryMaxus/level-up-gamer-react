import React, { useEffect, useMemo, useState } from 'react'
import '../../styles/Catalog.css'
import CatalogLateralMenu from '../organisms/CatalogLateralMenu'
import ProductGrid from '../organisms/ProductGrid'
import CatalogCategorySelector from '../organisms/CatalogCategorySelector'
import { Categories } from '../../data/Categories'
import PaginationNav from '../molecules/PaginationNav'
import ProductService from '../../services/ProductService'


export default function Catalog() {

  const [category, setCategory] = useState(Categories.PC_GAMERS);
  const [brand, setBrand] = useState("all");
  const [productCondition, setProductCondition] = useState("all");

  
  const [products,setProducts] = useState([]);


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

  const productsFilterByCategory = products.filter(p => p.category === category);

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
      (productCondition === "all" || p.productCondition === productCondition) &&
      (p.price <= selectedPrice)
  );
  return (
      <main id='catalog-main'>
        <CatalogLateralMenu
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
          productCondition={productCondition}
          setProductCondition={setProductCondition}
          brandSet = {brandSet}
          products = {productsFinal}
          setSelectedPrice = {setSelectedPrice}
          selectedPrice = {selectedPrice}
          maxPrice = {maxPrice}
        />
        <div id="main-catalog-container">
          <CatalogCategorySelector 
            category={category} 
            setCategory={setCategory} 
            setBrand={setBrand}
          />
          <div id="top-menu" className="vertical-catalog-menu-container">
            <select value={sortOption} onChange={e => setSortOption(e.target.value)}> 
              <option value="recommended">Recomendado</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
            </select>
            <PaginationNav />
          </div>
          <div id="product-grid">
            <ProductGrid 
              products={productsFinal}
            />
          </div>
          <div id="bottom-menu" className="vertical-catalog-menu-container">
            <PaginationNav />
          </div>
        </div>
      </main>
  )
}
