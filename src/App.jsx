import { useState } from 'react';
import './App.css';

function App() {
  const choices = ["rock", "paper", "scissors"];
  const emojis = { rock: "✊", paper: "✋", scissors: "✌️" };

  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  function handleComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
  }

  const playGame = (choice) => {
    const computerSelection = handleComputerChoice(); 
    setPlayerChoice(choice); 
    setComputerChoice(computerSelection);

    if (choice === computerSelection) {
      setResult("It's a draw!");
    } else if (
      (choice === "rock" && computerSelection === "scissors") ||
      (choice === "paper" && computerSelection === "rock") ||
      (choice === "scissors" && computerSelection === "paper")
    ) {
      setResult("Player wins!");
      setPlayerScore((prevScore) => prevScore + 1);
    } else {
      setResult("Computer wins!");
      setComputerScore((prevScore) => prevScore + 1); 
    }
  };

  return (
    <div>
      <h2>Rock Paper Scissors</h2>


      <p>Computer: {computerScore}</p> 
      <p>Player: {playerScore}</p>

      <p>Computer:</p>
      <p>{computerChoice ? emojis[computerChoice] :"✊" }</p>

      <h2>{result}</h2>
      <p>Player</p>

      <p>{playerChoice ? emojis[playerChoice] : "✌️"}</p>

      <hr/>


      <button onClick={() => playGame("rock")}>✊</button>
      <button onClick={() => playGame("paper")}>✋</button>
      <button onClick={() => playGame("scissors")}>✌️</button>
    </div>
  );
}

export default App;
