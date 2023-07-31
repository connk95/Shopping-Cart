import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  test("renders input page when there is no age input", () => {
    render(<App />);

    expect(screen.getByRole("heading")).toHaveTextContent(
      "Please enter your birth year"
    );
  });

  test("renders homepage once age is input", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await userEvent.type(screen.getByRole("spinbutton"), "1995");
    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByText("ConCept")).toBeInTheDocument();
  });
});
