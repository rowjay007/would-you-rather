import React from "react";
import { StatusBar, StatusFill, Wrapper } from "./OptionStatsStyle";

const OptionStats = ({width}) => {
  const spanWidth = `${width}%`;

  return (
    <Wrapper>
      <StatusBar>
        <p style={{ position: "absolute", marginLeft: "5px" }}>{spanWidth}</p>
        <StatusFill
          style={{ width: spanWidth }}
        />
      </StatusBar>
    </Wrapper>
  );
};

export default OptionStats;
