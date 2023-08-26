# Shopping Cart Project

Welcome to the Shopping Cart project! This project aims to provide a simple and user-friendly shopping cart implementation using CSS, and JavaScript with React. With this shopping cart, users can easily add, and remove items, creating a seamless shopping experience.

## Features

- Browse through a variety of "memories" with their names, prices, selectable age, and images.
- Add items to your cart, specifying the age you want.
- View your cart at any time to see the list of selected items along with their ages and total prices.
- Automatically calculate and display the total cost of items in your cart.

## Installation

1. Clone this repository using the following command:
   ```
   git clone https://github.com/connk95/Shopping-Cart.git
   ```

2. Navigate to the project directory:
   ```
   cd Shopping-Cart
   ```

3. Run the app and view in your browser:
   ```
   npm start
   ```

## Table of Contents

[App.jsx](https://github.com/connk95/Shopping-Cart/blob/main/src/App.jsx) - Contains states for items added to cart, available products, and user age. This module also contains the functions for submitting user age, and removing items from the cart. This module renders the age input screen, and once selected, renders the home page.

[Home.jsx](https://github.com/connk95/Shopping-Cart/blob/main/src/Site/Layout/Home/Home.jsx) - Contains a state and function which handle the changing background image.

[Nav.jsx](https://github.com/connk95/Shopping-Cart/blob/main/src/Site/Layout/Nav.jsx) - Links to the "Memories", "About", and "Cart" pages.

[Shop.jsx](https://github.com/connk95/Shopping-Cart/blob/main/src/Site/Layout/Shop/Shop.jsx)

[Sidebar.jsx](https://github.com/connk95/Shopping-Cart/blob/main/src/Site/Layout/Sidebar.jsx)

[Product.jsx](https://github.com/connk95/Shopping-Cart/blob/main/src/Site/Products/Product.jsx)

[ProductList.jsx](https://github.com/connk95/Shopping-Cart/blob/main/src/Site/Products/ProductList.jsx)

[About.jsx](https://github.com/connk95/Shopping-Cart/blob/main/src/Site/Layout/Shop/Shop.test.jsx)

[Cart.jsx](https://github.com/connk95/Shopping-Cart/blob/main/src/Site/Layout/Cart/Cart.jsx)

[App.css](https://github.com/connk95/Shopping-Cart/blob/main/src/App.css)

## Usage

1. Input your age on the title screen. This allows the program to display the age from 0 to your current age.
2. Navigate to "Memories" on the home page to view products, or "About" for more information.
3. Browse the list of available products on the memories page.
4. Filter departments using the sidebar.
5. Select the age you would like to implement this memory using the drop-down menu.
6. Click the "Add to Cart" button next to the desired item to add it to your shopping cart.
7. To view your cart, click on the "Cart" icon at the top of the page.
8. In the cart view, you can see all items, and remove them.
9. The total cost of the items in your cart will be automatically calculated and displayed.

## Contributing

Contributions to this project are welcome! If you find any bugs or have ideas for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was created by Connor Ketcheson.
- Product images were sourced from Pixabay and Pexels.
- Special thanks to Edward Peng for their guidance and support.

Enjoy your shopping experience with the Shopping Cart project! If you have any questions or feedback, please don't hesitate to contact us.

---
