import { Match } from "../src/models/Match";

describe("Match class", () => {
  let match: Match;

  beforeEach(() => {
    match = new Match("Olympiacos", "Rosenborg");
  });

  it("creates an instance with the given names and a default scores", () => {
    expect(match.print()).toBe("Olympiacos 0 - Rosenborg 0");
    expect(match.getId()).toBeDefined();
  });
});
