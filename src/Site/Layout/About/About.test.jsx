import About from "./About";
import { render, screen } from "@testing-library/react";

describe("About", () => {
  test("Renders h2 element properly", () => {
    render(<About />);

    const headerElement = screen.getByText("About");

    expect(headerElement).toBeInTheDocument();
  });

  test("Renders final paragraph", () => {
    render(<About />);

    expect(
      screen.getByText("It's time to remember everything you've ever imagined.")
    );
  });
});
