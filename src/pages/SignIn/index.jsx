import { useState } from "react";
import React from "react";

import MarketplaceAPI from "../../helpers/MarketplaceAPI";
import { doLogin } from "../../helpers/AuthHandler";

import { PageContainer, PageTitle, ErrorMessage } from "../../components/MainComponents";
import { PageArea } from "./styled";

const SignIn = () => {
  const api = MarketplaceAPI();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberLogin, setRememberLogin] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    const json = await api.login(email, password);

    json.error ? setError(json.error) : doLogin(json.token, rememberLogin);
    window.location.href = "/";
  };

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error && 
          <ErrorMessage>{error}</ErrorMessage>
        }


        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area__title">Email</div>
            <div className="area__input">
              <input
                type="email"
                disabled={disabled}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area__title">Senha</div>
            <div className="area__input">
              <input
                type="password"
                disabled={disabled}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </label>

          <label className="area">
            <div className="area__title">Lembra senha</div>
            <div className="area__input">
              <input
                type="checkbox"
                disabled={disabled}
                checked={rememberLogin}
                onChange={() => setRememberLogin(!rememberLogin)}
              />
            </div>
          </label>

          <label className="area">
            <div className="area__title"></div>
            <div className="area__input">
              <button disabled={disabled}>Login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default SignIn;
