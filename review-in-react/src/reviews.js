import React, { useState } from "react";
import people from "./data";

const Reviews = () => {
  const [index, setindex] = useState(0);
  const { id, name, image, job, text } = people[index];

  const checkNumber = (number) => {
    if (number < 0) return people.length - 1;
    if (number > people.length - 1) return 0;
    if (number == index) return checkNumber(number + 1);

    return number;
  };

  const prevBtn = () => {
    setindex(checkNumber(index - 1));
  };

  const NextBtn = () => {
    setindex(checkNumber(index + 1));
  };

  const randomPerson = () => {
    setindex(checkNumber(Math.floor(Math.random() * people.length)));
  };

  return (
    <div className="container">
      <img className="image-user" src={image} alt={name} />
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h3>{job}</h3>
      <p>{text}</p>
      <button className="Prevbtn" onClick={prevBtn}>
        Prev
      </button>
      <button className="Nextbtn" onClick={NextBtn}>
        Next
      </button>
      <div>
        <button onClick={randomPerson}>Surprise Me</button>
      </div>
    </div>
  );
};

export default Reviews;
