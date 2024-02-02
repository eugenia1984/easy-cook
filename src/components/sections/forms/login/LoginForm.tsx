import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { InputForm, PrimaryButton } from "../../../ui";
import { useUserStore } from "../../../../store";

import { ErrorMessage, FormLogin } from "./LoginForm.Styles";
import { PRIVATE_ROUTES } from "../../../../routes";
import { LOGIN_FORM } from "../../../../language";

export const LoginForm = () => {
  const CORRECT_EMAIL = "admin@email.com";
  const CORRECT_PASSWORD = "123456";

  const [emailInput, setEmailInput] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<null | string>(null);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<null | string>(null);

  const navigate = useNavigate();

  const isUserAuthenticated = useUserStore((state) => state.isAuth);
  const setUserAuthenticated = useUserStore((state) => state.login);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (emailInput === CORRECT_EMAIL
      && passwordInput === CORRECT_PASSWORD) {
      setUserAuthenticated();
    } else {
      setErrorEmail(LOGIN_FORM.EMAIL_ERROR_MESSAGE);
      setErrorPassword(LOGIN_FORM.EMAIL_ERROR_MESSAGE);
    }
  };

  useEffect(() => {
    if (isUserAuthenticated) {
      navigate(PRIVATE_ROUTES.HOME);
    }
  }, [isUserAuthenticated]);

  return (
    <FormLogin>
      <InputForm
        labelText={LOGIN_FORM.EMAIL_LABEL}
        id="email"
        placeholderText={LOGIN_FORM.EMAIL_PLACEHOLDER}
        value={emailInput}
        onChange={handleEmailChange}
      />
      {errorEmail && <ErrorMessage>{errorEmail}</ErrorMessage>}
      <InputForm
        labelText={LOGIN_FORM.PASSWORD_LABEL}
        id="password"
        placeholderText={LOGIN_FORM.PASSWORD_PLACEHOLDER}
        value={passwordInput}
        onChange={handlePasswordChange}
      />
      {errorPassword && <ErrorMessage>{errorPassword}</ErrorMessage>}
      <PrimaryButton
        text={LOGIN_FORM.BUTTON_TEXT}
        onClick={handleLogin}
      />
    </FormLogin>
  )
}