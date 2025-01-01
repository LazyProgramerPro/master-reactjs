import { Case, Default, Switch } from "./19-3";

const ScoreBoard = ({ scores }) => {
  return (
    <Switch>
      <Case condition={scores < 50}>
        You need more scores to unlock next card!
      </Case>
      <Case condition={scores >= 50 && scores < 100}>
        Just a little more scores needed!
      </Case>
      <Case condition={scores >= 100}>Next card is unlocked!</Case>
      <Default>You need to collect some scores!</Default>
    </Switch>
  );
};

export default ScoreBoard;
