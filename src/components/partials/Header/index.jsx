import { HeaderArea } from "./styled";
import { isLogged } from "../../../helpers/AuthHandler";

import { Link } from "react-router-dom";

const Header = () => {
  let logged = isLogged();

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">Logo Aqui</Link>
        </div>
        <nav>
          <ul>
            {logged ? (
              <>
                <li>
                  <Link to="/my-account">Minha Conta</Link>
                </li>

                <li>
                  <Link to="/logout">Cadastrar</Link>
                </li>
                <li>
                  <Link to="/post-an-ad" className="button">
                    Postar Anuncio
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>

                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>

                <li>
                  <Link to="/signin" className="button">
                    Postar Anuncio
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;
