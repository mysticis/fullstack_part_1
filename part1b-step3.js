import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App2 from "./exercise_2";
const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  );
};

const Header = props => <h1>{props.course}</h1>;
const Content = ({ part1, part2, part3 }) => (
  <div>
    <p>
      {part1.name}: {part1.exercises}
    </p>
    <p>
      {part2.name}: {part2.exercises}
    </p>
    <p>
      {part3.name}: {part3.exercises}
    </p>
  </div>
);
const Total = ({ part1, part2, part3 }) => (
  <p>
    Number of exercises: {part1.exercises + part2.exercises + part3.exercises}
  </p>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
