import React from "react";
import OptionStats from "./OptionStats/OptionStats";
import MarkUserAnswer from "./MarkUserAnswer";
import { ProgressBar, Text } from "./QuestionStatsStyle";

const Option = ({
  option,
  userAnswer,
  totalVotes,
  optionVotes,
  percent,
  text,
}) => {
  return (
    <ProgressBar
      style={
        userAnswer === option
          ? { border: "solid tomato 1px", borderRadius: "4px" }
          : null
      }
    >
      <Text style={{ height: "30px" }}>
        {userAnswer === option && <MarkUserAnswer />}
      </Text>
      <Text>Would you rather {text}</Text>
      <OptionStats width={percent} />
      <Text>
        {optionVotes} of {totalVotes} votes
      </Text>
    </ProgressBar>
  );
};

export default Option;
