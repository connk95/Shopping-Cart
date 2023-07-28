import React from "react";

//sidebar is only visible in Shop route
const Sidebar = ({ department, setDepartment, departmentList }) => {
  //highlight selected department for navigation

  return (
    <div id="sidebar">
      <ul>
        {departmentList.map((departmentList, index) => (
          <li
            className={
              departmentList === department ? "activeSidebar" : "sidebarItem"
            }
            key={`${index}`}
            onClick={() => {
              setDepartment(`${departmentList}`);
            }}
            data-testid={`list-item-${departmentList}`}
          >
            {`${departmentList}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
