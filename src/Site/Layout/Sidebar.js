import React from "react";

//sidebar is only visible in Shop route
const Sidebar = ({ department, setDepartment, departmentList }) => {
  //highlight selected department for navigation

  return (
    <div id="sidebar">
      <ul>
        {departmentList.map((departmentList) => (
          <li onClick={() => setDepartment(`${departmentList}`)}>
            {`${departmentList}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
