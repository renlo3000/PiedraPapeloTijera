import { useState } from 'react';
import PPTUtil from '../utils/PPTUtil';

export default function usePPT() {
  const { MOVES, randomMove, judge, resultText } = PPTUtil();

  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [playerMove, setPlayerMove] = useState(null);
  const [cpuMove, setCpuMove] = useState(null);
  const [resultLabel, setResultLabel] = useState('R: —');

  function play(moveKey) {
    const p = MOVES[moveKey];
    const c = randomMove();

    setPlayerMove(p);
    setCpuMove(c);

    const winner = judge(p, c); 
    if (winner === 'PLAYER') setPlayerScore(s => s + 1);
    if (winner === 'CPU') setCpuScore(s => s + 1);

    setResultLabel(resultText(winner));
  }

  function reset() {
    setPlayerScore(0);
    setCpuScore(0);
    setPlayerMove(null);
    setCpuMove(null);
    setResultLabel('R: —');
  }

  return {
    MOVES,
    playerScore,
    cpuScore,
    playerMove,
    cpuMove,
    resultLabel,
    play,
    reset,
  };
}
