export class Team {
    private name: string;
    private score: number;

    constructor(name: string, score: number = 0) {
        this.name = name;
        this.score = score;
    }

    getName() {
        return this.name;
    }

    getScore() {
        return this.score;
    }
}