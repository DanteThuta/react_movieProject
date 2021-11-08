import React, { useContext } from "react";

//Routing for Header
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, TMDBLogoImg, Content, LogoImg } from "./Header.styles";

//Context
import { Context } from "../../context";

const Header = () => {
  const [user] = useContext(Context);
  // console.log(user);
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmbd-logo" />
        </Link>
        {user ? (
          <span>Logged in as : {user.username}</span>
        ) : (
          <Link to="/login"> Login</Link>
        )}
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
