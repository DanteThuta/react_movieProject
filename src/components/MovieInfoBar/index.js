import React from "react";

//Helpers
import { calcTime, convertMoney } from "../../helpers";

//Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">{calcTime(time)}</div>
        <div className="column">{convertMoney(budget)}</div>
        <div className="column">{convertMoney(revenue)}</div>
      </Content>
    </Wrapper>
  );
};

export default MovieInfoBar;
