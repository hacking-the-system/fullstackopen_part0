import Title from "./Title";
import Button from "./Button";

const feedback = ({ values }) => {
  const buttons = values.map((element) => {
    const incrementOne = () => element.setter(element.value + 1);
    return <Button text={element.label} handleClick={incrementOne} />;
  });
  return (
    <div>
      <Title text="give feedback" />
      {buttons}
    </div>
  );
};

export default feedback;
