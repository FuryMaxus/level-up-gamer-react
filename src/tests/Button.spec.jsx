import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Button from "../components/atoms/Button";
import { MemoryRouter } from "react-router-dom";


const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));


describe("Tests Button", () => {

  it("se renderiza correctamente", () => {
    render(
      <MemoryRouter>
        <Button text="botton funcionando"/>
      </MemoryRouter>
    );
    render()
    expect(screen.getByText("botton funcionando")).toBeInTheDocument();
  });

  it("navegacion con botton funciona", () => {
    
    render(
      <MemoryRouter>
        <Button text = "catalogo" url="/catalogo" />
      </MemoryRouter>
    );
    
    const button = screen.getByText("catalogo");
    fireEvent.click(button);
    expect(mockedNavigate).toHaveBeenCalledWith('/catalogo');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);

  });

 

});