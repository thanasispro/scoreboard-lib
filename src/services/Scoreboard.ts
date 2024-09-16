import { Match } from "../models/Match";

export class Scoreboard {
  private matches: Map<string, Match> = new Map();

  public addMatch(homeTeamName: string, awayTeamName: string): Match {
    this.validateTeamsForNewMatch(homeTeamName, awayTeamName);
    const match = new Match(homeTeamName, awayTeamName);
    const matchId = match.getId();
    this.matches.set(matchId, match);
    return match;
  }

  public getMatch(matchId: string): Match {
    const match = this.matches.get(matchId);
    if (!match) {
      throw new Error(`Match with ID ${matchId} does not exist.`);
    }
    return match;
  }

  public finishMatch(matchId: string): string {
    const matchToEnd = this.matches.get(matchId);

    if (!matchToEnd) {
      throw new Error(
        `Cannot remove match. Match with ID ${matchId} does not exist.`
      );
    }

    this.matches.delete(matchId);
    return matchId;
  }

  public getByScore(): string[] {
    const sortedMatches = Array.from(this.matches.values()).sort((a, b) => {
      return b.getTotalScore() - a.getTotalScore();
    });

    return sortedMatches.map((match) => match.print());
  }

  private validateTeamsForNewMatch(homeTeamName: string, awayTeamName: string): void {
    if (this.teamAlreadyInMatch(homeTeamName)) {
      throw new Error(`A match involving ${homeTeamName} is already active.`);
    }
    if (this.teamAlreadyInMatch(awayTeamName)) {
      throw new Error(`A match involving ${awayTeamName} is already active.`);
    }
  }

  private teamAlreadyInMatch(teamName: string): boolean {
    for (const match of this.matches.values()) {
      if (match.print().toLowerCase().includes(teamName.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
}
