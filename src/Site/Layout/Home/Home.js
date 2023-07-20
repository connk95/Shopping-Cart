import React from "react";

//home screen, indludes nav bar and quick entry to shop
const Home = ({ age, setAge }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setAge(
      new Date().getFullYear() - document.getElementById("ageInput").value
    );
    console.log(document.getElementById("ageInput").value);
  };

  if (age) {
    return (
      <div id="homePage">
        <h1>Home</h1>
        <img src="../src/Site/Products/assets/"></img>
      </div>
    );
  }
  return (
    <div id="homeInput">
      <form onSubmit={handleSubmit} id="ageForm">
        <h1>Please enter your birth year</h1>
        <input type="number" id="ageInput"></input>
        <p>This information allows us to tailor our service to your life</p>
        <button type="submit">Enter store</button>
      </form>
    </div>
  );
};

export default Home;
