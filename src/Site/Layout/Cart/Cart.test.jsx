import Cart from "./Cart";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Cart", () => {
  let cart = [{ title: "mock title", age: 20, price: 0, asset: "mock asset" }];

  const handleRemove = () => {
    cart = [];
  };

  test("renders cart items", () => {
    render(<Cart cart={cart} />);

    expect(
      screen.getByText(`[${cart[0].title}, age: ${cart[0].age}]`)
    ).toBeInTheDocument();
  });

  test("removes item from cart", async () => {
    render(<Cart cart={cart} handleRemove={handleRemove} />);

    await userEvent.click(screen.getByText("Remove"));

    expect((cart = []));
  });
});
