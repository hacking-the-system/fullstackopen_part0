import Part from "./Part";

let Content = (props) => {
  const content = props.parts.map((d) => (
    <Part part={d.name} exercises={d.exercises} />
  ));
  return <>{content}</>;
};

export default Content;
