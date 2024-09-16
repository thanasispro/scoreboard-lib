import { Scoreboard } from "../src/services/Scoreboard";
import { Match } from "../src/models/Match";

describe("Scoreboard", () => {
  it("should add a match to the scoreboard", () => {
    const scoreboard = new Scoreboard();
    const matchId = scoreboard.addMatch("Olympiacos", "Rosenborg");

    const match = scoreboard.getMatch(matchId);
    expect(match).toBeInstanceOf(Match);
    expect(match.print()).toBe("Olympiacos 0 - Rosenborg 0");
  });

  it("should throw an error with no wrong match id", () => {
    const scoreboard = new Scoreboard();
    expect(() => scoreboard.getMatch("1")).toThrow(
      `Match with ID 1 does not exist.`
    );
  });

  it("should remove a match from the scoreboard", () => {
    const scoreboard = new Scoreboard();
    const matchId = scoreboard.addMatch("Olympiacos", "Rosenborg");

    const returnedFinishId = scoreboard.finishMatch(matchId);
    expect(returnedFinishId).toBe(matchId);
    expect(() => scoreboard.getMatch(matchId)).toThrow(
      `Match with ID ${matchId} does not exist.`
    );
  });

  it("should return a summary of games by total score, biggest score first", () => {
    const scoreboard = new Scoreboard();
    scoreboard.addMatch("Olympiacos", "Rosenborg");
    const matchId1 = scoreboard.addMatch("Panathinaikos", "Bodo");

    const match1 = scoreboard.getMatch(matchId1);

    match1.updateScore(1, 0);

    const scoreboardByScore = scoreboard.getByScore();

    expect(scoreboardByScore.length).toBe(2);
    expect(scoreboardByScore[0]).toBe("Panathinaikos 1 - Bodo 0");
    expect(scoreboardByScore[1]).toBe("Olympiacos 0 - Rosenborg 0");
  });
});
