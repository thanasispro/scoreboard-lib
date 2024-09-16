import { Match } from "../src/models/Match";

describe("Match class:", () => {
  describe("Creation and methods:", () => {
    let match: Match;

    beforeEach(() => {
      match = new Match("Greece", "Norway");
    });

    it("creates an instance with the given names and a default scores", () => {
      expect(match.print()).toBe("Greece 0 - Norway 0");
      expect(match.getId()).toBeDefined();
    });

    it("can update scores to the teams", () => {
      match.updateScore(0, 1);
      expect(match.print()).toBe("Greece 0 - Norway 1");
    });

    it('should trim whitespace from the home team name and return correct summary', () => {
      const match = new Match('  Greece  ', 'Norway');
      expect(match.print()).toBe('Greece 0 - Norway 0');
    });
  
    it('should trim whitespace from the away team name and return correct summary', () => {
      const match = new Match('Greece', '  Norway  ');
      expect(match.print()).toBe('Greece 0 - Norway 0');
    });
  
    it('should trim whitespace from both team names and return correct summary', () => {
      const match = new Match('  Greece  ', '  Norway  ');
      expect(match.print()).toBe('Greece 0 - Norway 0');
    });
  });

  describe("Validation:", () => {
    it("should throw an error if the home and away teams have the same name", () => {
      expect(() => {
        new Match("Greece", "Greece");
      }).toThrow("Home and away teams cannot have the same name.");
    });

    it("should throw an error for case-insensitive identical names", () => {
      expect(() => {
        new Match("Greece", "greece");
      }).toThrow("Home and away teams cannot have the same name.");
    });

    it("should throw an error if the home team name is an empty string", () => {
      expect(() => {
        new Match("", "Norway");
      }).toThrow("Team names cannot be empty.");
    });

    it("should throw an error if the away team name is an empty string", () => {
      expect(() => {
        new Match("Greece", "");
      }).toThrow("Team names cannot be empty.");
    });

    it('should throw an error if the trimmed home team name is empty', () => {
      expect(() => {
        new Match('   ', 'Norway');
      }).toThrow('Team names cannot be empty.');
    });
  
    it('should throw an error if the trimmed away team name is empty', () => {
      expect(() => {
        new Match('Greece', '   ');
      }).toThrow('Team names cannot be empty.');
    });
  });

});
