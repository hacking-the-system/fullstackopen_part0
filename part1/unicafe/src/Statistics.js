import Title from "./Title";

const statistics = ({ values }) => {
  const displayValues = values.map((element) => {
    return (
      <p>
        {element.label} {element.value}
      </p>
    );
  });
  const all = values.map((element) => element.value).reduce((a, b) => a + b);
  const average =
    values
      .map((element) => {
        if (element.label === "good") {
          return element.value;
        } else if (element.label === "neutral") {
          return 0;
        } else {
          // (element.label === "bad")
          return element.value * -1;
        }
      })
      .reduce((a, b) => a + b) / all;
  const positive =
    (values
      .map((element) => {
        if (element.label === "good") {
          return element.value;
        } else {
          return 0;
        }
      })
      .reduce((a, b) => a + b) /
      all) *
    100;
  if (all === 0) {
    return (
      <div>
        <Title text="statistics" />
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <Title text="statistics" />
        {displayValues}
        <p>all {all}</p>
        <p>average {isNaN(average) ? 0 : average}</p>
        <p>positive {isNaN(positive) ? 0 : positive}%</p>
      </div>
    );
  }
};

export default statistics;
