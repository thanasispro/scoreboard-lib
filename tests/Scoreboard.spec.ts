import { Scoreboard } from "../src/services/Scoreboard";
import { Match } from "../src/models/Match";

describe("Scoreboard service", () => {
  describe("Instance creation and methods", () => {
    let scoreboard: Scoreboard;
    let match: Match;
    beforeEach(() => {
      scoreboard = new Scoreboard();
      match = scoreboard.addMatch("Greece", "Norway");
    });

    it("should return an id from getMatchMethod", () => {
      expect(scoreboard.getMatch(match.getId())).toBe(match);
    });

    it("should add a match to the scoreboard", () => {
      expect(match).toBeInstanceOf(Match);
      expect(match.print()).toBe("Greece 0 - Norway 0");
    });

    it("should throw an error if matchId does not exist", () => {
      const scoreboard = new Scoreboard();

      expect(() => {
        scoreboard.finishMatch("invalid-id");
      }).toThrow(
        "Cannot remove match. Match with ID invalid-id does not exist."
      );
    });

    it("should remove a match from the scoreboard", () => {
      const matchId = match.getId();
      const returnedFinishId = scoreboard.finishMatch(matchId);
      expect(returnedFinishId).toBe(matchId);
      expect(() => scoreboard.getMatch(matchId)).toThrow(
        `Match with ID ${matchId} does not exist.`
      );
    });

    it("should return a summary of games by total score, biggest score first", () => {
      const match1 = scoreboard.addMatch("Finland", "Iceland");
      match1.updateScore(1, 0);

      const scoreboardByScore = scoreboard.getByScore();

      expect(scoreboardByScore.length).toBe(2);
      expect(scoreboardByScore[0]).toBe("Finland 1 - Iceland 0");
      expect(scoreboardByScore[1]).toBe("Greece 0 - Norway 0");
    });

    it("should allow adding a match with teams not involved in other active matches", () => {
      const scoreboard = new Scoreboard();
      scoreboard.addMatch("Greece", "Norway");

      expect(() => {
        scoreboard.addMatch("Finland", "Denmark");
      }).not.toThrow();
    });
  });
  describe("Validation", () => {
    it("should throw an error if the home team is already involved in a match", () => {
      const scoreboard = new Scoreboard();
      scoreboard.addMatch("Greece", "Norway");

      expect(() => {
        scoreboard.addMatch("Greece", "Sweden");
      }).toThrow("A match involving Greece is already active.");
    });

    it("should throw an error if the away team is already involved in a match", () => {
      const scoreboard = new Scoreboard();
      scoreboard.addMatch("Greece", "Norway");

      expect(() => {
        scoreboard.addMatch("Finland", "Norway");
      }).toThrow("A match involving Norway is already active.");
    });
  });
});
