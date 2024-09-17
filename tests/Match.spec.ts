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

    it("should trim whitespace from the home team name and return correct summary", () => {
      const match = new Match("  Greece  ", "Norway");
      expect(match.print()).toBe("Greece 0 - Norway 0");
    });

    it("should trim whitespace from the away team name and return correct summary", () => {
      const match = new Match("Greece", "  Norway  ");
      expect(match.print()).toBe("Greece 0 - Norway 0");
    });

    it("should trim whitespace from both team names and return correct summary", () => {
      const match = new Match("  Greece  ", "  Norway  ");
      expect(match.print()).toBe("Greece 0 - Norway 0");
    });

    it("should not throw an error if the scores change by +1 or -1", () => {
      const match = new Match("Greece", "Norway");
      expect(() => {
        match.updateScore(1, 1);
      }).not.toThrow();
    });
  });

  describe("Validation", () => {
    describe("Name", () => {
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

      it("should throw an error if the trimmed home team name is empty", () => {
        expect(() => {
          new Match("   ", "Norway");
        }).toThrow("Team names cannot be empty.");
      });

      it("should throw an error if the trimmed away team name is empty", () => {
        expect(() => {
          new Match("Greece", "   ");
        }).toThrow("Team names cannot be empty.");
      });

      it("should throw an error with the faulty team if the team is not from participating countries", () => {
        expect(() => {
          new Match("Atlantis", "Norway");
        }).toThrow("Atlantis is not from participating countries.");
      });
    });
    describe("Score", () => {
      it("should update the score if the change is +1 or -1", () => {
        const match = new Match("Greece", "Norway");
        match.updateScore(1, 0);
        expect(match.print()).toBe("Greece 1 - Norway 0");
        match.updateScore(1, 1);
        expect(match.print()).toBe("Greece 1 - Norway 1");
      });

      it("should throw an error if the home team score change is more than +1 or -1", () => {
        const match = new Match("Greece", "Norway");
        match.updateScore(1, 0);
        expect(() => {
          match.updateScore(3, 0);
        }).toThrow(
          "Greece's score can only change by +1 or -1. Current: 1, New: 3"
        );
      });

      it("should throw an error if the away team score change is more than +1 or -1", () => {
        const match = new Match("Greece", "Norway");
        match.updateScore(0, 1);
        expect(() => {
          match.updateScore(0, 3);
        }).toThrow(
          "Norway's score can only change by +1 or -1. Current: 1, New: 3"
        );
      });
    });
  });
});
