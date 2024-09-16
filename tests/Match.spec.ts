import { Match } from "../src/models/Match";

describe("Match class:", () => {
  describe("Creation and methods:", () => {
    let match: Match;

    beforeEach(() => {
      match = new Match("Olympiacos", "Rosenborg");
    });

    it("creates an instance with the given names and a default scores", () => {
      expect(match.print()).toBe("Olympiacos 0 - Rosenborg 0");
      expect(match.getId()).toBeDefined();
    });

    it("can update scores to the teams", () => {
      match.updateScore(0, 1);
      expect(match.print()).toBe("Olympiacos 0 - Rosenborg 1");
    });
  });
  
  describe("Validation:", () => {
    it("should throw an error if the home and away teams have the same name", () => {
      expect(() => {
        new Match("Olympiacos", "Olympiacos");
      }).toThrow("Home and away teams cannot have the same name.");
    });

    it("should throw an error for case-insensitive identical names", () => {
      expect(() => {
        new Match("Olympiacos", "olympiacos");
      }).toThrow("Home and away teams cannot have the same name.");
    });

    it("should throw an error if the home team name is an empty string", () => {
      expect(() => {
        new Match("", "Rosenborg");
      }).toThrow("Team names cannot be empty.");
    });

    it("should throw an error if the away team name is an empty string", () => {
      expect(() => {
        new Match("Olympiacos", "");
      }).toThrow("Team names cannot be empty.");
    });
  });
});
