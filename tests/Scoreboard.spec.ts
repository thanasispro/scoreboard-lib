import { Scoreboard } from '../src/services/Scoreboard';
import { Match } from '../src/models/Match';

describe('Scoreboard', () => {
  it('should add a match to the scoreboard', () => {
    const scoreboard = new Scoreboard();
    const matchId = scoreboard.addMatch('Olympiacos', 'Rosenborg');

    const match = scoreboard.getMatch(matchId);
    expect(match).toBeInstanceOf(Match);
    expect(match.print()).toBe('Olympiacos 0 - Rosenborg 0');
  });

  it('should throw an error with no wrong match id', () => {
    const scoreboard = new Scoreboard();
    expect(() => scoreboard.getMatch('1')).toThrow(
        `Match with ID 1 does not exist.`
      );
  });
});