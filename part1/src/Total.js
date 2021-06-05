const Total = (props) => {
  const total = props.exercises.reduce((a, b) => a + b);
  return <p>Number of exercises {total}</p>;
};

export default Total;
