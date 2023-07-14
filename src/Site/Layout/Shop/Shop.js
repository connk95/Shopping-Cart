import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

const Shop = () => {
  const [department, setDepartment] = useState("");

  useEffect(() => {
    const departmentSelect = () => {
      if (department === "clothes") {
        //display only clothes
      } else if (department === "shoes") {
        //display only shoes
      } else if (department === "accessories") {
        //display only accessories
      } else {
        //display all
      }
    };
  });

  return (
    <div>
      <Sidebar department={department} setDepartment={setDepartment} />
      <div id="shop">
        <h2>{`${department}`}</h2>
      </div>
    </div>
  );
};

export default Shop;
