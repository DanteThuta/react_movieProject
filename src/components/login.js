import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

//styles
import { Wrapper } from "./login.styles";

//components
import Button from "./Button";

//API
import API from "../API";

//Context
import { Context } from "../context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);

    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );

      setUser({ sessionId: sessionId.session_id, username });
      console.log(sessionId);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };
  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };
  return (
    <Wrapper>
      {error && <div className="error">There was an error!</div>}
      <label>UserName:</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <Button text="login" callback={handleSubmit}></Button>
    </Wrapper>
  );
};

export default Login;
