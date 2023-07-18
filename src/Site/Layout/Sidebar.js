import React from "react";

//sidebar is only visible in Shop route
const Sidebar = ({ department, setDepartment }) => {
  //highlight selected department for navigation

  return (
    <div id="sidebar">
      <ul>
        <li onClick={() => setDepartment("travel")}>Travel</li>
        <li onClick={() => setDepartment("celebrations")}>Celebrations</li>
        <li onClick={() => setDepartment("romantic")}>Romantic</li>
        {/* <li onClick={() => setDepartment("family")}>Family</li> */}
        <li onClick={() => setDepartment("school")}>School</li>
        <li onClick={() => setDepartment("sad")}>Sad</li>
        <li onClick={() => setDepartment("other")}>Other</li>
      </ul>
    </div>
  );
};

export default Sidebar;
