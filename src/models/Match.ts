import { Team } from "./Team";
import { v4 as uuidv4 } from "uuid";

export class Match {
  private homeTeam: Team;
  private awayTeam: Team;
  private id: string;

  constructor(homeTeamName: string, awayTeamName: string) {
    homeTeamName = homeTeamName.trim();
    awayTeamName = awayTeamName.trim();
    this.validateTeams(homeTeamName, awayTeamName);
    this.homeTeam = new Team(homeTeamName);
    this.awayTeam = new Team(awayTeamName);
    this.id = uuidv4();
  }

  private validateTeams(homeTeamName: string, awayTeamName: string): void {
    if (!homeTeamName || !awayTeamName) {
      throw new Error('Team names cannot be empty.');
    }

    if (homeTeamName.trim().toLowerCase() === awayTeamName.trim().toLowerCase()) {
      throw new Error('Home and away teams cannot have the same name.');
    }
  }

  getId() {
    return this.id;
  }

  updateScore(homeTeamScore: number, awayTeamScore: number) {
    this.homeTeam.setScore(homeTeamScore);
    this.awayTeam.setScore(awayTeamScore);
  }

  getTotalScore() {
    return this.homeTeam.getScore() + this.awayTeam.getScore();
  }

  print() {
    return `${this.homeTeam.getName()} ${this.homeTeam.getScore()} - ${this.awayTeam.getName()} ${this.awayTeam.getScore()}`;
  }
}
