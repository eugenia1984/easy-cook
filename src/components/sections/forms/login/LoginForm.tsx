import { useState } from "react"
import { InputForm, PrimaryButton } from "../../../ui"
import { FormLogin } from "./LoginForm.Styles"
import { useUserStore } from "../../../../store";

export const LoginForm = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');

  const { login } = useUserStore();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const handleLogin = () => {
    console.info('emailInput: ', emailInput, 'passwordInput: ', passwordInput)

    if (emailInput === "admin@email.com"
      && passwordInput === "123456") {
      login();
    } else {
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
      <InputForm
        labelText="Your password"
        id="password"
        placeholderText="Type your password here"
        value={passwordInput}
        onChange={handlePasswordChange}
      />
      <PrimaryButton text="Log in" onClick={handleLogin} />
    </FormLogin>
  )
}