import { Team } from "./Team";

export class Match {
  private homeTeam: Team;
  private awayTeam: Team;

  constructor(homeTeamName: string, awayTeamName: string) {
    this.homeTeam = new Team(homeTeamName);
    this.awayTeam = new Team(awayTeamName);
  }

  print() {
    return `${this.homeTeam.getName()} ${this.homeTeam.getScore()} - ${this.awayTeam.getName()} ${this.awayTeam.getScore()}`;
  }
}
