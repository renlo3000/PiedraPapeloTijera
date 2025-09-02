import PPTUtil from '../../utils/PPTUtil';

describe('PPTUtil (con PPTVO e imágenes)', () => {
  const { MOVES, judge, resultText } = PPTUtil();

  test('ROCK vs ROCK => TIE', () => {
    expect(judge(MOVES.ROCK, MOVES.ROCK)).toBe('TIE');
  });

  test('ROCK vs SCISSORS => PLAYER', () => {
    expect(judge(MOVES.ROCK, MOVES.SCISSORS)).toBe('PLAYER');
  });

  test('ROCK vs PAPER => CPU', () => {
    expect(judge(MOVES.ROCK, MOVES.PAPER)).toBe('CPU');
  });

  test('PAPER vs ROCK => PLAYER', () => {
    expect(judge(MOVES.PAPER, MOVES.ROCK)).toBe('PLAYER');
  });

  test('SCISSORS vs PAPER => PLAYER', () => {
    expect(judge(MOVES.SCISSORS, MOVES.PAPER)).toBe('PLAYER');
  });

  test('SCISSORS vs ROCK => CPU', () => {
    expect(judge(MOVES.SCISSORS, MOVES.ROCK)).toBe('CPU');
  });

  test.each([
    ['PLAYER', 'R: JUGADOR'],
    ['CPU', 'R: CPU'],
    ['TIE', 'R: EMPATE'],
  ])('resultText(%s) => %s', (input, expected) => {
    expect(resultText(input)).toBe(expected);
  });
});
