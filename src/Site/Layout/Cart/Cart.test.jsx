import Cart from "./Cart";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Cart", () => {
  const cart = [
    { title: "mock title", age: 20, price: 0, asset: "mock asset" },
  ];
  const mockHandleRemove = vi.fn();

  test("renders cart items", () => {
    render(<Cart cart={cart} />);

    expect(
      screen.getByText(`[${cart[0].title}, age: ${cart[0].age}]`)
    ).toBeInTheDocument();
  });

  test("removes item from cart", async () => {
    render(<Cart cart={cart} handleRemove={mockHandleRemove} />);

    await userEvent.click(screen.getByText("Remove"));

    expect(mockHandleRemove).toHaveBeenCalledWith(0);
  });
});
