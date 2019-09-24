import React from "react";

//Anecdotes part 2 and 3

const App = ({ anecdotes }) => {
  const votesArray = Array.apply(null, new Array(6)).map(
    Number.prototype.valueOf,
    0
  );
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(0);
  const [point, setPoint] = useState([...votesArray]);
  const getRandomInt = length => {
    setSelected(Math.floor(Math.random() * Math.floor(length)));
    setVote(0);
  };

  const userVote = sel => {
    setVote(vote + 1);
    const updatedArray = [...point];
    updatedArray[sel] += 1;
    setPoint(updatedArray);
  };
  console.log(selected, point);
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p> {anecdotes[selected]}</p>
      <p>Has {vote} votes</p>
      <button
        style={{ marginRight: `0.5rem` }}
        onClick={() => userVote(selected)}
      >
        Vote
      </button>
      <button onClick={() => getRandomInt(anecdotes.length)}>
        Select Random Quote
      </button>
      <h3>Anecdote with most votes</h3>
      {Math.max(...point) === 0
        ? "No Votes yet!"
        : anecdotes[point.indexOf(Math.max(...point))]}
      <p>{Math.max(...point) === 0 ? "" : `Has ${Math.max(...point)} votes`}</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
