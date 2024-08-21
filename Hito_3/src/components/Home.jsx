import React from "react";
import pastas from "./components/pastas";
import CardPasta from "./components/CardPasta";

const Home = () => {
  return (
    <div>
      {pastas.map((pizza) => (
        <CardPasta key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;
