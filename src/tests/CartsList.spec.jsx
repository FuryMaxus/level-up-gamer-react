import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartList from "../components/organisms/CartList";


const mockRemoveFromCart = jest.fn();
jest.mock("../context/CartContext", () => ({
  useCart: () => ({
    cartProducts: [
      { id: 1, name: "P1", brand: "B1", price: 1000, imgUrl: "img1.png" },
      { id: 2, name: "P2", brand: "B2", price: 2000, imgUrl: "img2.png" },
    ],
    removeFromCart: mockRemoveFromCart,
  }),
}));


jest.mock("../components/atoms/Button", () => ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
));

describe("CartList", () => {
  let checkedItems;
  let setCheckedItems;

  beforeEach(() => {
    jest.clearAllMocks();
    checkedItems = { 1: true };
    setCheckedItems = jest.fn((fn) => {
      checkedItems = typeof fn === "function" ? fn(checkedItems) : fn;
    });
  });

  it("renderiza todos los productos correctamente", () => {
    render(<CartList checkedItems={checkedItems} setCheckedItems={setCheckedItems} />);

    expect(screen.getByText("Carro")).toBeInTheDocument();
    expect(screen.getByText("P1")).toBeInTheDocument();
    expect(screen.getByText("P2")).toBeInTheDocument();
  });

  it("elimina un producto cuando se hace click en 'Eliminar'", () => {
    render(<CartList checkedItems={checkedItems} setCheckedItems={setCheckedItems} />);

    const deleteButtons = screen.getAllByText("Eliminar");
    fireEvent.click(deleteButtons[0]);

    expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
    expect(setCheckedItems).toHaveBeenCalled();
  });
});