const Total = (props) => {
  console.log(props)
  const total = props.parts.map(part => part.exercises)
  .reduce((a, b) => a + b);
  return <p>Number of exercises {total}</p>;
};

export default Total;
