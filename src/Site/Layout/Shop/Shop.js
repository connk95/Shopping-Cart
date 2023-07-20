import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Product from "../../Products/Product";

const Shop = ({ allProducts, age, cart, setCart }) => {
  const [department, setDepartment] = useState("");
  const [departmentList] = useState(
    allProducts.map((category) => {
      return category.name;
    })
  );
  const [currentProducts, setCurrentProducts] = useState(
    allProducts
      .map((category) => {
        return category.products;
      })
      .flat(2)
  );

  useEffect(() => {
    if (department) {
      setCurrentProducts(
        allProducts.find((object) => object.name === department).products
      );
    } else {
      setCurrentProducts(
        allProducts
          .map((category) => {
            return category.products;
          })
          .flat(2)
      );
    }
  }, [department, allProducts, setCurrentProducts]);

  return (
    <div id="shopPage">
      <Sidebar
        department={department}
        setDepartment={setDepartment}
        departmentList={departmentList}
      />
      <div id="shop">
        <h2>{`${department}`}</h2>
        <div id="displayProducts">
          {currentProducts.map((currentProducts, index) => (
            <Product
              key={`product${index}`}
              index={index}
              asset={currentProducts.asset}
              title={currentProducts.title}
              age={age}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
