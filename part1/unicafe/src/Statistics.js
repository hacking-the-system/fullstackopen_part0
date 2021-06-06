import Title from "./Title";

const statistics = ({ values }) => {
  const displayValues = values.map((element) => {
    return (
      <p>
        {element.label} {element.value}
      </p>
    );
  });
  return (
    <div>
      <Title text="statistics" />
      {displayValues}
    </div>
  );
};

export default statistics;
