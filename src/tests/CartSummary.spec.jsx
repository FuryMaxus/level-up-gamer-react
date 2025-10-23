import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

jest.mock("../context/CartContext", () => ({
  useCart: jest.fn(),
}));

import { useCart } from "../context/CartContext";
import CartSummary from "../components/organisms/CartSummary";




describe("tests CartSummary", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza y precios se suman correctamente", () => {
    useCart.mockReturnValue({
      cartProducts: [
        { id: 1, name: "Producto 1", price: 1000 },
        { id: 2, name: "Producto 2", price: 2000 },
      ],
    });

    const checkedItems = { 1: true, 2: true };

    render(
      <MemoryRouter>
        <CartSummary checkedItems={checkedItems} />
      </MemoryRouter>
    );

    expect(screen.getByText("Resumen de Compra")).toBeInTheDocument();


    const amounts = screen.getAllByText("$3.000");
    expect(amounts).toHaveLength(2); 
    expect(amounts[1]).toBeInTheDocument();

  });
});