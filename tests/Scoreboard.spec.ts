import { Scoreboard } from "../src/services/Scoreboard";
import { Match } from "../src/models/Match";

describe("Scoreboard service", () => {
  let scoreboard: Scoreboard;
  let matchId: string;

  beforeEach(() => {
    scoreboard = new Scoreboard();
    matchId = scoreboard.addMatch("Olympiacos", "Rosenborg");
  });

  it("should add a match to the scoreboard", () => {
    const match = scoreboard.getMatch(matchId);
    expect(match).toBeInstanceOf(Match);
    expect(match.print()).toBe("Olympiacos 0 - Rosenborg 0");
  });

  it("should remove a match from the scoreboard", () => {
    const returnedFinishId = scoreboard.finishMatch(matchId);
    expect(returnedFinishId).toBe(matchId);
    expect(() => scoreboard.getMatch(matchId)).toThrow(
      `Match with ID ${matchId} does not exist.`
    );
  });

  it("should return a summary of games by total score, biggest score first", () => {
    const matchId1 = scoreboard.addMatch("Panathinaikos", "Bodo");

    const match1 = scoreboard.getMatch(matchId1);

    match1.updateScore(1, 0);

    const scoreboardByScore = scoreboard.getByScore();

    expect(scoreboardByScore.length).toBe(2);
    expect(scoreboardByScore[0]).toBe("Panathinaikos 1 - Bodo 0");
    expect(scoreboardByScore[1]).toBe("Olympiacos 0 - Rosenborg 0");
  });
});
