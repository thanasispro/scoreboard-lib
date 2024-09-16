import { Team } from "../src/models/Team";

describe("Team Class", () => {
  let team: Team;

  beforeEach(() => {
    team = new Team("Greece");
  });

  describe("Initialization", () => {
    it("creates an instance with the given name and a default score", () => {
      expect(team.getName()).toBe("Greece");
      expect(team.getScore()).toBe(0);
    });

    it("can set a score for the Team", () => {
      team.setScore(1);
      expect(team.getScore()).toBe(1);
    });
  });

  describe("Validation: score", () => {
    it.each([
      ["a negative number", -5],
      ["a non-integer number", 2.3],
      ["NaN", NaN],
      ["Infinity", Infinity],
    ])(
      "should throw an error when setting score to %s (%s)",
      (_description, score) => {
        expect(() => team.setScore(score)).toThrow(
          `Invalid score ${score}: Score must be a non-negative integer.`
        );
      }
    );
  });
});
