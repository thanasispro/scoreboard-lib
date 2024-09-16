
# World Cup Library

This project is a World Cup management library that allows you to track matches, update scores, and manage a scoreboard. It includes validation to ensure that scores and teams are handled properly, making it ideal for managing a set of football matches during a World Cup or similar event.

## Features

- **Add a new match**: Create a match between two teams with unique names.
- **Update the score**: Safely update match scores with validation to ensure that scores can only change by +1 or -1.
- **Finish a match**: Mark a match as finished by removing it from the scoreboard.
- **Retrieve match details**: Get a summary of a match and its current score.
- **Error handling**: Ensures that invalid match IDs, improper score updates, duplicate team names, and empty team names are handled correctly.

## Installation and Setup

### 1. **Clone the Repository**

You can clone the repository using either HTTPS or SSH:

#### Using HTTPS:

```bash
git clone https://github.com/thanasispro/scoreboard-lib.git
```

#### Using SSH:

```bash
git git@github.com:thanasispro/scoreboard-lib.git
```

### 2. **Install Dependencies**

Navigate to the project directory and install the dependencies using `pnpm`, `npm`, or `yarn`:

#### Using `pnpm`:

```bash
pnpm install
```

#### Using `npm`:

```bash
npm install
```

#### Using `yarn`:

```bash
yarn install
```

### 3. **Using the Library**

After installing the dependencies, you can use the library in your project by importing the required classes. Here’s an example:

```typescript
import { Scoreboard } from './path-to-library/src/services/Scoreboard';

const scoreboard = new Scoreboard();
const matchId = scoreboard.addMatch('Greece', 'Norway');

// Update the score
scoreboard.getMatch(matchId).updateScore(1, 0);

// Get a summary of the match
console.log(scoreboard.getMatch(matchId).print());  // Outputs: "Greece 1 - Norway 0"

// Finish the match
scoreboard.finishMatch(matchId);
```

### 4. **Running Tests**

To ensure the functionality is working as expected, you can run the tests included in the project.

#### Running Tests:

```bash
pnpm test
```

For `npm`:

```bash
npm test
```

For `yarn`:

```bash
yarn test
```

#### Checking Test Coverage:

```bash
pnpm run test:coverage
```

For `npm`:

```bash
npm run test:coverage
```

For `yarn`:

```bash
yarn run test:coverage
```

## Key Functionalities

### 1. **Add a Match**

Create a new match between two teams:

```typescript
const matchId = scoreboard.addMatch('Greece', 'Norway');
```

### 2. **Update Score**

Update the scores for a match. The score change is validated to only allow changes of +1 or -1:

```typescript
scoreboard.getMatch(matchId).updateScore(1, 0);
```

### 3. **Finish a Match**

Mark a match as finished by removing it from the scoreboard:

```typescript
scoreboard.finishMatch(matchId);
```

### 4. **Get Match Summary**

Retrieve the current score and summary of the match:

```typescript
console.log(scoreboard.getMatch(matchId).print());  // Outputs: "Greece 1 - Norway 0"
```

### 5. **Get Matches Sorted by Total Score**

Retrieve the matches sorted by total score, from highest to lowest:

```typescript
const sortedMatches = scoreboard.getByScore();
console.log(sortedMatches);  // Outputs an array of match summaries, sorted by total score.
```

## Error Handling

- **Invalid Match ID**: If you try to get or finish a match with an invalid `matchId`, an error will be thrown:

```typescript
try {
  scoreboard.getMatch('invalid-id');
} catch (error) {
  console.error(error.message);  // Outputs: "Match with ID invalid-id does not exist."
}
```

- **Invalid Score Update**: If you try to update the score by more than +1 or -1, an error will be thrown:

```typescript
try {
  scoreboard.getMatch(matchId).updateScore(3, 0);  // Invalid score update
} catch (error) {
  console.error(error.message);  // Outputs: "Team's score can only change by +1 or -1."
}
```

- **Duplicate Team Names**: If you try to add a match with the same team name for both teams, an error will be thrown:

```typescript
try {
  scoreboard.addMatch('Greece', 'Greece');
} catch (error) {
  console.error(error.message);  // Outputs: "Home and away teams cannot have the same name."
}
```

- **Empty Team Names**: If you try to add a match where one or both team names are empty, an error will be thrown:

```typescript
try {
  scoreboard.addMatch('Greece', '');
} catch (error) {
  console.error(error.message);  // Outputs: "Team names cannot be empty."
}
```

- **Team Already in a Match**: If you try to add a match where one or both teams are already involved in another ongoing match, an error will be thrown:

```typescript
scoreboard.addMatch('Greece', 'Norway');
try {
  scoreboard.addMatch('Greece', 'Denmark');
} catch (error) {
  console.error(error.message);  // Outputs: "A match involving Greece is already active."
}
```

## License

This project is licensed under the MIT License.
