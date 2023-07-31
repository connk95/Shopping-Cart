import Product from "./Product";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Product", () => {
  const addCart = (title, age, price, asset) => {
    if (!cart.some((obj) => obj.title === title && obj.age === age)) {
      cart.push([...cart, { title, age, price, asset }]);
    }
  };

  const cart = [];

  test("adds item to cart when clicked", async () => {
    const asset = "mock asset";
    const title = "mock title";
    const price = 0;
    const age = 5;
    const allAges = [1, 2, 3, 4, 5];
    render(
      <Product
        asset={asset}
        title={title}
        price={price}
        age={age}
        allAges={allAges}
        addCart={addCart}
      />
    );

    await userEvent.click(screen.getByText("Add to cart"));

    expect(cart.length).toBe(1);
    expect(cart[0][0].title).toBe("mock title");
  });
});
