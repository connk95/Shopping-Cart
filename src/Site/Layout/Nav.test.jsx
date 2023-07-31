import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav", () => {
  const age = 20;
  const cart = ["mock cart item"];

  test("Renders h1 element properly", () => {
    render(<Nav age={age} cart={cart} />);

    const titleElement = screen.getByText("ConCept");

    expect(titleElement).toBeInTheDocument();
  });

  test("Renders memories element properly", () => {
    render(<Nav age={age} cart={cart} />);

    const memoriesElement = screen.getByText("Memories");

    expect(memoriesElement).toBeInTheDocument();
  });

  test("Renders cart items number properly", () => {
    render(<Nav age={age} cart={cart} />);

    const memoriesElement = screen.getByText("1");

    expect(memoriesElement).toBeInTheDocument();
  });
});
