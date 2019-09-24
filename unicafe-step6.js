import React from "react";

//Step 6
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
      <table style={{ marginTop: `2rem`, textAlign: `justify` }}>
        <thead>
          <tr>
            <th scope="col">{text}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Good:</th>
            <td>{good}</td>
          </tr>
          <tr>
            <th scope="row">Neutral:</th>
            <td>{neutral}</td>
          </tr>
          <tr>
            <th scope="row">Bad:</th>
            <td>{bad}</td>
          </tr>
          <tr>
            <th scope="row">All:</th>
            <td>{total}</td>
          </tr>
          <tr>
            <th scope="row">Average:</th>
            <td>{average()}</td>
          </tr>
          <tr>
            <th scope="row">Positive:</th>
            <td>{positive()}%</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default App;
