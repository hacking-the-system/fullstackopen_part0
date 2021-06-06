import Title from "./Title";
import Statistic from "./Statistic";

const statistics = ({ values }) => {
  const displayValues = values.map((element) => (
    <Statistic label={element.label} value={element.value} />
  ));
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
  const positiveDisplayValue = (isNaN(positive) ? 0 : positive) + "%";
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
        <table>
          {displayValues}
          <Statistic label="all" value={all} />
          <Statistic label="average" value={isNaN(average) ? 0 : average} />
          <Statistic label="positive" value={positiveDisplayValue} />
        </table>
      </div>
    );
  }
};

export default statistics;
