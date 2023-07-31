import Home from "./Home";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  const age = 20;
  const images = [{ title: "A trip to Paris", image: "paris" }];

  test("renders image correctly", () => {
    render(<Home age={age} />);

    expect(screen.getByTestId(images[0].title)).toBeInTheDocument();
  });
});
