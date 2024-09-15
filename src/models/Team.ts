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
        if(!Number.isInteger(score) || score < 0) throw new Error(`Invalid score ${score}: Score must be a non-negative integer.`);
        this.score = score;
    }
}