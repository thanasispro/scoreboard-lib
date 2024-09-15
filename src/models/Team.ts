export class Team {
    private name: string;
    private score: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getScore() {
        return this.score;
    }

    setScore(score: number) {
        this.score = score;
    }
}