import Product from "./Product";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Product", () => {
  const mockAddCart = vi.fn();
  const mockAsset = "mock asset";
  const mockTitle = "mock title";
  const mockPrice = 0;
  const mockSelectedAge = "5";
  const mockAllAges = [1, 2, 3, 4, 5];

  test("addCart is called when add to cart button is clicked", async () => {
    render(
      <Product
        asset={mockAsset}
        title={mockTitle}
        price={mockPrice}
        allAges={mockAllAges}
        addCart={mockAddCart}
      />
    );

    await userEvent.selectOptions(screen.getByTestId("ageSelect"), "5");

    await userEvent.click(screen.getByText("Add to cart"));

    expect(mockAddCart).toHaveBeenCalledWith(
      mockTitle,
      mockSelectedAge,
      mockPrice,
      mockAsset
    );
  });
});
