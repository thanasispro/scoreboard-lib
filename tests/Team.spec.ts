import { Team } from '../src/models/Team';

describe('Team Class', () => {
  it('creates an instance with the given name and a default score', () => {
    const team = new Team('Olympiacos');
    expect(team.getName()).toBe('Olympiacos');
    expect(team.getScore()).toBe(0);
  });
});