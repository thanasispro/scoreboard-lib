import { Team } from "../src/models/Team";

describe("Team Class", () => {
  let team: Team;

  beforeEach(() => {
    team = new Team("Olympiacos");
  });

  it("creates an instance with the given name and a default score", () => {
    expect(team.getName()).toBe("Olympiacos");
    expect(team.getScore()).toBe(0);
  });

  it("can set a score for the Team", () => {
    team.setScore(1);
    expect(team.getScore()).toBe(1);
  });

  it('throws an error when score is a negative number', () => {
    expect(() => team.setScore(-5)).toThrow('Invalid score -5: Score must be a non-negative integer.');
  });

  it('throws an error when score is a non-integer number', () => {
    expect(() => team.setScore(2.3)).toThrow('Invalid score 2.3: Score must be a non-negative integer.');
  });
});
