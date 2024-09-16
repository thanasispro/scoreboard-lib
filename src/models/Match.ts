import { Team } from "./Team";
import { v4 as uuidv4 } from 'uuid';


export class Match {
  private homeTeam: Team;
  private awayTeam: Team;
  private id: string;

  constructor(homeTeamName: string, awayTeamName: string) {
    this.homeTeam = new Team(homeTeamName);
    this.awayTeam = new Team(awayTeamName);
    this.id = uuidv4();
  }

  getId() {
    return this.id;
  }

  print() {
    return `${this.homeTeam.getName()} ${this.homeTeam.getScore()} - ${this.awayTeam.getName()} ${this.awayTeam.getScore()}`;
  }
}
