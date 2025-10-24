import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductDisplay from "../components/molecules/ProductDisplay";
import { Categories } from "../data/Categories";


const mockAddToCart = jest.fn();

jest.mock("../context/CartContext", () => ({
  useCart: () => ({
    addToCart: mockAddToCart,
  }),
}));

const mockProduct = {
  id: 999,
  name: "Product",
  brand: "Brand",
  price: 999999,
  category: Categories.PC_GAMERS,
  imgUrl: "http://example.com/img.png",
};


describe("ProductDisplay", () => {

  beforeEach(() => {
    mockAddToCart.mockClear(); 
  });

  it("muestra los datos del producto correctamente", () => {
    
    render(
      <MemoryRouter>
        <ProductDisplay product={mockProduct} />
      </MemoryRouter>
    );

    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("$999.999")).toBeInTheDocument();
  });

  it("botón 'Añadir al carro' llama a addToCart", () => {

    render(
      <MemoryRouter>
        <ProductDisplay product={mockProduct} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Añadir al carro"));

    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });

});