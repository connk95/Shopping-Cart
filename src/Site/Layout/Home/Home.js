import React from "react";

//home screen, indludes nav bar and quick entry to shop
const Home = ({ age }) => {
  if (age) {
    return (
      <div id="homePage">
        <h1>Home</h1>
        {/* <img src="../src/Site/Products/assets/"></img> */}
      </div>
    );
  }
};

export default Home;
