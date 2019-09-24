import React from "react";
//Part1d - Step 5
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setGoodFeedback = () => setGood(good + 1);
  const setNeutralFeedBack = () => setNeutral(neutral + 1);
  const setBadFeedback = () => setBad(bad + 1);
  const total = () => {
    return good + bad + neutral;
  };
  return (
    <div>
      <Header text="Give FeedBack" />
      <span>
        <FeedBackButtons onClick={setGoodFeedback} text={"Good"} />
        <FeedBackButtons onClick={setNeutralFeedBack} text={"Neutral"} />
        <FeedBackButtons onClick={setBadFeedback} text={"Bad"} />
      </span>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <Statistics
          text={"Statistics"}
          good={good}
          neutral={neutral}
          bad={bad}
          total={total()}
        />
      ) : (
        <h5 style={{ marginTop: `2rem` }}>No Feedback Given</h5>
      )}
    </div>
  );
};
const Header = ({ text }) => <h1>{text}</h1>;
const FeedBackButtons = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);
const Statistics = ({ text, good, neutral, bad, total }) => {
  const average = () => (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = () => (good / total) * 100;
  return (
    <>
      <h2>{text}</h2>

      <Statistic text="Statistics" />

      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="All" value={total} />
      <Statistic text="Average" value={average()} />
      <Statistic text="Positive" value={positive()} />
    </>
  );
};
const Statistic = ({ text, value }) => (
  <div>
    <p>
      {text}: {value}
    </p>
  </div>
);

export default App;
