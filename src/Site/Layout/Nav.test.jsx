import { render, screen } from "@testing-library/react";
import Nav from "./Nav";
import { MemoryRouter } from "react-router-dom";

describe("Nav", () => {
  const age = 20;
  const cart = ["mock cart item"];

  test("Renders h1 element properly", () => {
    render(
      <MemoryRouter>
        <Nav age={age} cart={cart} />
      </MemoryRouter>
    );

    const titleElement = screen.getByText("ConCept");

    expect(titleElement).toBeInTheDocument();
  });

  test("Renders memories element properly", () => {
    render(
      <MemoryRouter>
        <Nav age={age} cart={cart} />
      </MemoryRouter>
    );

    const memoriesElement = screen.getByText("Memories");

    expect(memoriesElement).toBeInTheDocument();
  });

  test("Renders cart items number properly", () => {
    render(
      <MemoryRouter>
        <Nav age={age} cart={cart} />
      </MemoryRouter>
    );

    const memoriesElement = screen.getByText("Cart[1]", { exact: false });

    expect(memoriesElement).toBeInTheDocument();
  });
});
