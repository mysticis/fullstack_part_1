import React from "react";

//Part 1d - step 1
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setGoodFeedback = () => setGood(good + 1);
  const setNeutralFeedBack = () => setNeutral(neutral + 1);
  const setBadFeedback = () => setBad(bad + 1);
  return (
    <div>
      <Header text="Give FeedBack" />
      <span>
        <FeedBackButtons onClick={setGoodFeedback} text={"Good"} />
        <FeedBackButtons onClick={setNeutralFeedBack} text={"Neutral"} />
        <FeedBackButtons onClick={setBadFeedback} text={"Bad"} />
      </span>
      <Statistics text={"Statistics"} good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
const Header = ({ text }) => <h1>{text}</h1>;
const FeedBackButtons = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);
const Statistics = ({ text, good, neutral, bad }) => (
  <>
    <h2>{text}</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>bad: {bad}</p>
  </>
);

export default App;
