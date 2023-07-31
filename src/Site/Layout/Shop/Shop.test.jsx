import Shop from "./Shop";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Shop", () => {
  const mockAllProducts = [
    {
      name: "mock name one",
      products: [
        { title: "mock product one", asset: "mock asset one", price: 0 },
        { title: "mock product two", asset: "mock asset two", price: 0 },
      ],
    },
    {
      name: "mock name two",
      products: [
        { title: "mock product three", asset: "mock asset three", price: 0 },
        { title: "mock product four", asset: "mock asset four", price: 0 },
      ],
    },
  ];
  const mockAge = 20;
  const mockCart = [];

  test("expect allProducts to have been rendered correctly", () => {
    const mockSetCart = vi.fn();

    render(
      <Shop
        allProducts={mockAllProducts}
        age={mockAge}
        cart={mockCart}
        setCart={mockSetCart}
      />
    );

    expect(
      screen.getByText("mock product one", { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText("mock product four", { exact: false })
    ).toBeInTheDocument();
  });

  test("expect setCart to have been called correctly", async () => {
    const mockSetCart = vi.fn();

    render(
      <Shop
        allProducts={mockAllProducts}
        age={mockAge}
        cart={mockCart}
        setCart={mockSetCart}
      />
    );

    await userEvent.selectOptions(
      screen.getByTestId(`ageSelect-${mockAllProducts[0].products[0].title}`),
      "10"
    );

    await userEvent.click(
      screen.getByTestId(`add-${mockAllProducts[0].products[0].title}`)
    );

    expect(mockSetCart).toHaveBeenCalledWith([
      ...mockCart,
      {
        title: mockAllProducts[0].products[0].title,
        age: "10",
        price: mockAllProducts[0].products[0].price,
        asset: mockAllProducts[0].products[0].asset,
      },
    ]);
  });

  test("expect product not to be added to cart if same product is already in cart", async () => {
    const mockSetCart = vi.fn();

    const mockCartWithItem = [
      {
        title: mockAllProducts[0].products[0].title,
        age: "10",
        price: mockAllProducts[0].products[0].price,
        asset: mockAllProducts[0].products[0].asset,
      },
    ];

    render(
      <Shop
        allProducts={mockAllProducts}
        age={mockAge}
        cart={mockCartWithItem}
        setCart={mockSetCart}
      />
    );

    await userEvent.selectOptions(
      screen.getByTestId(`ageSelect-${mockAllProducts[0].products[0].title}`),
      "10"
    );

    await userEvent.click(
      screen.getByTestId(`add-${mockAllProducts[0].products[0].title}`)
    );

    expect(mockSetCart).not.toHaveBeenCalled();
  });
});
