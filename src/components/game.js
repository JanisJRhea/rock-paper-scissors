import React, { useState } from 'react';
import UserInput from './userinput';
import ScoreDisplay from './scoredisplay';
import './game.css';

const Game = () => {
  const [userMove, setUserMove] = useState('');
  const [computerMove, setComputerMove] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');

  const moves = ['Rock', 'Paper', 'Scissors'];

  const getComputerMove = () => {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      return "It's a draw!";
    }
    if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Scissors' && computer === 'Paper') ||
      (user === 'Paper' && computer === 'Rock')
    ) {
      setUserScore(userScore + 1);
      return 'You win!';
    } else {
      setComputerScore(computerScore + 1);
      return 'Computer wins!';
    }
  };

  const handleUserMove = (move) => {
    const computerMove = getComputerMove();
    setUserMove(move);
    setComputerMove(computerMove);
    const gameResult = determineWinner(move, computerMove);
    setResult(gameResult);
  };

  let resultClass = 'result'; 

  if (result === 'You win!') {
    resultClass += ' user-win';
  } else if (result === 'Computer wins!') {
    resultClass += ' computer-win';
  } else {
    resultClass += ' draw';
  }

  return (
    <div className="game-container">
      <h2 className="title">Rock-Paper-Scissors</h2>
      <UserInput onUserMove={handleUserMove} />
      <div>
        <h3 className="move">Your Move: {userMove}</h3>
        <h3 className="move">Computer's Move: {computerMove}</h3>
        <h3 className={resultClass}>Result: {result}</h3>
      </div>
      <ScoreDisplay userScore={userScore} computerScore={computerScore} className="score" />
    </div>
  );
};

export default Game;
