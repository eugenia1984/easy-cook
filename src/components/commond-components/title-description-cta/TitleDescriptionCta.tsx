import { FC } from "react";
import { HeadlineH2, NormalText, OutlinedButton } from "../../ui";
import { Container, Description, Wrapper } from "./TitleDescriptionCta.Styles";

type TitleDescriptionCtaProps = {
  textTitle: string;
  textDescription: string;
  textButton: string;
}
export const TitleDescriptionCta: FC<TitleDescriptionCtaProps> = ({
  textTitle,
  textDescription,
  textButton
}) => {
  return (
    <Container>
      <Wrapper>
        <HeadlineH2 text={textTitle} textcolor="white" />
        <Description>{textDescription}</Description>
        <OutlinedButton text={textButton} />
      </Wrapper>
    </Container>
  )
}