import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Product from "../../Products/Product";

const Shop = ({ products }) => {
  const [department, setDepartment] = useState("");
  const [currentProducts, setCurrentProducts] = useState();

  //   let allProducts = Object.values(products[0].travel);

  useEffect(() => {
    if (department === "travel") {
      //display only travel
      setCurrentProducts(Object.values(products[0]["travel"]));
      console.log(currentProducts);
      currentProducts.forEach((memory) => {
        console.log(memory.title);
        console.log(memory.asset);
      });
    } else if (department === "celebrations") {
      //display only celebrations
    } else if (department === "romantic") {
      //display only romantic
      //   } else if (department === "family") {
      //display only family
    } else if (department === "school") {
      //display only school
    } else if (department === "sad") {
      //display only sad
    } else if (department === "other") {
      //display only other
    } else {
      //display all
    }
  }, [department]);

  return currentProducts.map((currentProducts, index) => (
    <div>
      <Sidebar department={department} setDepartment={setDepartment} />
      <div id="shop">
        <h2>{`${department}`}</h2>
        <div id="displayProducts">
          <Product
            key={`product${index}`}
            index={index}
            asset={currentProducts.asset}
            title={currentProducts.title}
            setCurrentProducts={currentProducts}
          />
        </div>
      </div>
    </div>
  ));
};

export default Shop;
