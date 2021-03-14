import React, { useState } from "react";
import { WorkoutCard } from "./components/WorkoutCard";
import "./App.scss";
import { cardData } from "./data/card-data";

function App() {
  const [state] = useState({
    workoutCards: cardData,
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleClass = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="App">
      {state.workoutCards.map((card, index) => (
        <WorkoutCard
          key={card.id}
          onClick={() => toggleClass(index)}
          trainer={card.trainerImage}
          thumbnail={card.thumbnail}
          title={card.title}
          totalWorkouts={card.totalWorkouts}
          className={activeIndex === index ? "card active" : "card"}
          runTime={card.runTime}
          distance={card.distance}
        />
      ))}
    </div>
  );
}

export default App;
