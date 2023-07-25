import React from "react";

//sidebar is only visible in Shop route
const Sidebar = ({ department, setDepartment, departmentList }) => {
  //highlight selected department for navigation

  let styles = null;
  if (department === departmentList) {
    styles = "selected";
  }

  return (
    <div id="sidebar">
      <ul>
        {departmentList.map((departmentList, index) => (
          <li
            id={styles}
            className="sidebarItem"
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
