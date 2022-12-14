import { apiURL } from "../data/constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormContainer from "../layout/containers/FormContainer";
import Input from "../components/form/Input";
import Submit from "../components/form/Submit";

export default function LogInPage({ setLoginData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    setToggle(true);
    axios
      .post(apiURL.login, { email, password })
      .then((res) => {
        setLoginData({
          ...res.data,
          config: {
            headers: { Authorization: `Bearer ${res.data.token}` },
          },
        });
        navigate("/hoje");
      })
      .catch(() => {
        alert("Não foi possível fazer login!");
        setToggle(false);
      });
  }

  return (
    <FormContainer>
      <form onSubmit={(e) => submit(e)}>
        <Input
          data-test="email-input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email"
          required
          disabled={toggle}
        />
        <Input
          data-test="password-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="senha"
          required
          disabled={toggle}
        />
        <Submit dataTest="login-btn" disabled={toggle}>
          Entrar
        </Submit>
      </form>
      <Link data-test="signup-link" to="/cadastro">
        Não tem uma conta? Cadastre-se!
      </Link>
    </FormContainer>
  );
}
