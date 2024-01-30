import { LoginForm } from ".."
import { HeadlineH1, NormalText } from "../../ui"
import { Section, Wrapper } from "./LoginSection.Styles"

export const LoginSection = () => {
  return (
    <Wrapper>
      <Section>
        <HeadlineH1 text="Login" />
        <NormalText text="Please enter your email address and password" />
        <LoginForm />
      </Section>
    </Wrapper>
  )
}