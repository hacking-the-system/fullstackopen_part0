import React, { useState } from "react";
import Feedback from "./Feedback";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const values = [
    {
      label: "good",
      value: good,
      setter: setGood,
    },
    {
      label: "neutral",
      value: neutral,
      setter: setNeutral,
    },
    {
      label: "bad",
      value: bad,
      setter: setBad,
    },
  ];

  return (
    <div>
      <Feedback values={values} />
      <Statistics values={values} />
    </div>
  );
};

export default App;
