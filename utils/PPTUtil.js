// utils/PPTUtil.js
import { PPTVO } from '../valueobjects/PPTVO';

const PPTUtil = () => {
  const MOVES = {
    ROCK: new PPTVO('ROCK', 'Piedra', require('../assets/images/rock.png')),
    PAPER: new PPTVO('PAPER', 'Papel', require('../assets/images/paper.png')),
    SCISSORS: new PPTVO('SCISSORS', 'Tijeras', require('../assets/images/scissors.png')),
  };

  const order = ['ROCK', 'PAPER', 'SCISSORS'];

  function randomMove() {
    const key = order[Math.floor(Math.random() * order.length)];
    return MOVES[key];
  }

  function judge(playerMove, cpuMove) {
    if (playerMove.code === cpuMove.code) return 'TIE';
    if (
      (playerMove.code === 'ROCK' && cpuMove.code === 'SCISSORS') ||
      (playerMove.code === 'SCISSORS' && cpuMove.code === 'PAPER') ||
      (playerMove.code === 'PAPER' && cpuMove.code === 'ROCK')
    ) {
      return 'PLAYER';
    }
    return 'CPU';
  }

  function resultText(winner) {
    if (winner === 'PLAYER') return 'R: JUGADOR';
    if (winner === 'CPU') return 'R: CPU';
    return 'R: EMPATE';
  }

  return { MOVES, randomMove, judge, resultText };
};

export default PPTUtil;
