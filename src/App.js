import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cardData = data.map((cardData) => {
    return <Card key={cardData.name} cardData={cardData} />;
  });
  return (
    <div>
      <Navbar />
      <section>{cardData}</section>
    </div>
  );
}
