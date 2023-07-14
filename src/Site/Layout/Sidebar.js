import React from "react";

//sidebar is only visible in Shop route
const Sidebar = ({ department, setDepartment }) => {
  //highlight selected department for navigation

  return (
    <div id="sidebar">
      <ul>
        <li onClick={() => setDepartment("tops")}>Tops</li>
        <li onClick={() => setDepartment("bottoms")}>Bottoms</li>
        <li onClick={() => setDepartment("outer")}>Outer</li>
        <li onClick={() => setDepartment("bags")}>Bags</li>
        <li onClick={() => setDepartment("shoes")}>Shoes</li>
        <li onClick={() => setDepartment("accessories")}>Accessories</li>
      </ul>
    </div>
  );
};

export default Sidebar;
