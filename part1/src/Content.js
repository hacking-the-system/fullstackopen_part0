import Part from "./Part";

let Content = (props) => {
  const content = props.content.map((d) => (
    <Part part={d.part} exercises={d.exercises} />
  ));
  return <>{content}</>;
};

export default Content;
