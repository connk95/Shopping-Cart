import React, { useState, useEffect } from "react";
import paris from "../Home/background/paris.jpg";
import date from "../Home/background/date.jpg";
import christmas from "../Home/background/christmas.jpg";
import grad from "../Home/background/grad.jpg";

const images = [
  { title: "A trip to Paris", image: paris },
  { title: "Your first date", image: date },
  { title: "Christmas morning", image: christmas },
  { title: "Graduation day", image: grad },
];

//home screen, indludes nav bar and quick entry to shop
const Home = ({ age }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 3 ? 0 : v + 1;
      });
    }, 10000);
    return () => clearInterval(interval);
  });

  if (age) {
    return (
      <div
        id="homePage"
        style={{ backgroundImage: `url(${images[value].image}` }}
      >
        <h2>Get started on your ideal mind.</h2>
        <h3>{images[value].title}, we've got that too.</h3>
      </div>
    );
  }
};

export default Home;
