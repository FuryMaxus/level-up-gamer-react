import React from "react";
import { render, screen } from "@testing-library/react";
import ProductGrid from "../components/organisms/ProductGrid";

jest.mock("../components/molecules/ProductDisplay", () => (props) => {
  return <div data-testid="product-display">{props.product.name}</div>;
});

describe("ProductGrid", () => {
  it("renderiza todos los productos", () => {
    const products = [
      { id: 1, name: "Producto 1", price: 1000 },
      { id: 2, name: "Producto 2", price: 2000 },
    ];

    render(<ProductGrid products={products} />);

    const items = screen.getAllByTestId("product-display");
    expect(items).toHaveLength(products.length);

    expect(items[0]).toHaveTextContent("Producto 1");
    expect(items[1]).toHaveTextContent("Producto 2");
  });
});
