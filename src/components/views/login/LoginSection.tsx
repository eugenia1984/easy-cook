import { LOGIN } from "../../../language"
import { LoginForm } from "../../sections"
import { HeadlineH1, NormalText } from "../../ui"
import { Section, Wrapper } from "./LoginSection.Styles"

export const LoginSection = () => {
  return (
    <Wrapper>
      <Section>
        <HeadlineH1 text={LOGIN.TITLE} />
        <NormalText text={LOGIN.SUBTITLE} />
        <LoginForm />
      </Section>
    </Wrapper>
  )
}