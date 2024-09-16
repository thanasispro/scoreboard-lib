import { Match } from "../models/Match";

export class Scoreboard {
  private matches: Map<string, Match> = new Map();

  public addMatch(homeTeamName: string, awayTeamName: string): string {
    const match = new Match(homeTeamName, awayTeamName);
    const matchId = match.getId();
    this.matches.set(matchId, match);
    return matchId;
  }

  public getMatch(matchId: string): Match {
    const match = this.matches.get(matchId);
    if (!match) {
      throw new Error(`Match with ID ${matchId} does not exist.`);
    }
    return match;
  }
}