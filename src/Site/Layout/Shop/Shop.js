import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Product from "../../Products/Product";

const Shop = ({ products }) => {
  const [department, setDepartment] = useState("");
  const [currentProducts, setCurrentProducts] = useState();

  useEffect(() => {
    const departmentSelect = () => {
      if (department === "travel") {
        //display only travel
        setCurrentProducts(products[0]["travel"]);
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
    };
  });

  return currentProducts.map((currentProducts, index) => (
    <div>
      <Sidebar department={department} setDepartment={setDepartment} />
      <div id="shop">
        <h2>{`${department}`}</h2>
        <div id="displayProducts">
          <Product index={index} />
        </div>
      </div>
    </div>
  ));
};

export default Shop;
