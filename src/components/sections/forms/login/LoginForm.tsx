import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { InputForm, PrimaryButton } from "../../../ui";
import { useUserStore } from "../../../../store";

import { ErrorMessage, FormLogin } from "./LoginForm.Styles";
import { PRIVATE_ROUTES } from "../../../../routes";

export const LoginForm = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<null | string>(null);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<null | string>(null);

  const navigate = useNavigate();

  const { login, isAuth } = useUserStore();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  useEffect(() => {
    if (isAuth) {
      navigate(PRIVATE_ROUTES.HOME);
    }
  }, [isAuth, navigate]);

  const handleLogin = () => {

    if (emailInput === "admin@email.com"
      && passwordInput === "123456") {
      login();
    } else {
      setErrorEmail('X - E-mail must be: admin@email.com');
      setErrorPassword('X - Password must be: 123456');
      alert(`Login no ok: ${emailInput} - ${passwordInput}`)
      console.error("Wrong credentials");
    }
  };

  return (
    <FormLogin>
      <InputForm
        labelText="Your e-mail account"
        id="email"
        placeholderText="Type you e-mail here"
        value={emailInput}
        onChange={handleEmailChange}
      />
      {errorEmail && <ErrorMessage>{errorEmail}</ErrorMessage>}
      <InputForm
        labelText="Your password"
        id="password"
        placeholderText="Type your password here"
        value={passwordInput}
        onChange={handlePasswordChange}
      />
      {errorPassword && <ErrorMessage>{errorPassword}</ErrorMessage>}
      <PrimaryButton text="Log in" onClick={handleLogin} />
    </FormLogin>
  )
}