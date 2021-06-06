import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);

  const defaultValues = Array(anecdotes.length).fill(0)
  const [values, setValues] = useState(defaultValues)

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const nextAnecdote = () =>
    setSelected(randomIntFromInterval(0, anecdotes.length - 1));

  const vote = () => {
    const copy = {...values}
    copy[selected] += 1
    setValues(copy)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {values[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
    </div>
  );
};

export default App;
