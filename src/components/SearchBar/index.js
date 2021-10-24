import React, { useState, useEffect, useRef } from "react";

//Image
import searchIcon from "../../images/search-icon.svg";

//Styles
import { Content, Wrapper } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearInterval(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setState(e.target.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
