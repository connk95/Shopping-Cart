import React from "react";

//sidebar is only visible in Shop route
const Sidebar = ({ setDepartment, departmentList }) => {
  //highlight selected department for navigation

  return (
    <div id="sidebar">
      <ul>
        {departmentList.map((departmentList, index) => (
          <li
            id="sidebarItem"
            key={`${index}`}
            onClick={() => setDepartment(`${departmentList}`)}
          >
            {`${departmentList}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
