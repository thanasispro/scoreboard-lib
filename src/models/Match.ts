import { Team } from "./Team";
import { v4 as uuidv4 } from "uuid";

const PARTICIPATING_COUNTRIES = [
  "Greece",
  "Norway",
  "Brazil",
  "Argentina",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Denmark",
  "Finland",
  "England",
  "Sweden",
  "Iceland",
  "Japan"
];

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
      throw new Error("Team names cannot be empty.");
    }

    if (
      homeTeamName.trim().toLowerCase() === awayTeamName.trim().toLowerCase()
    ) {
      throw new Error("Home and away teams cannot have the same name.");
    }

    if (!this.isValidCountry(homeTeamName)) {
      throw new Error(`${homeTeamName} is not from participating countries.`);
    }

    if (!this.isValidCountry(awayTeamName)) {
      throw new Error(`${awayTeamName} is not from participating countries.`);
    }
  }

  getId() {
    return this.id;
  }

  updateScore(homeTeamScore: number, awayTeamScore: number) {
    this.validateScoreChange(homeTeamScore, awayTeamScore);
    this.homeTeam.setScore(homeTeamScore);
    this.awayTeam.setScore(awayTeamScore);
  }

  getTotalScore() {
    return this.homeTeam.getScore() + this.awayTeam.getScore();
  }

  print() {
    return `${this.homeTeam.getName()} ${this.homeTeam.getScore()} - ${this.awayTeam.getName()} ${this.awayTeam.getScore()}`;
  }

  private validateScoreChange(
    newHomeScore: number,
    newAwayScore: number
  ): void {
    if (newHomeScore - this.homeTeam.getScore() > 1) {
      throw new Error(
        `${this.homeTeam.getName()}'s score can only change by +1 or -1. Current: ${this.homeTeam.getScore()}, New: ${newHomeScore}`
      );
    }
    if (newAwayScore - this.awayTeam.getScore() > 1) {
      throw new Error(
        `${this.awayTeam.getName()}'s score can only change by +1 or -1. Current: ${this.awayTeam.getScore()}, New: ${newAwayScore}`
      );
    }
  }

  private isValidCountry(teamName: string): boolean {
    return PARTICIPATING_COUNTRIES.some(
      (country) => country.toLowerCase() === teamName.toLowerCase()
    );
  }
}
