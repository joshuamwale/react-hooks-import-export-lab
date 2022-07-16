import React from "react";
import {username, city, age, marriage} from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Software Engineer and poet from {city} <br></br>
        I am {age} years old.<br></br> {marriage}.<br></br>
        My hobies are writing poems, reading Shakespeare, and cycling. 
      </h1>
    </div>
  );
}
export default Home;