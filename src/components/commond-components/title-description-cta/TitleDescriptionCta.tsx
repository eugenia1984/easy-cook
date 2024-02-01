import { FC } from "react";
import { HeadlineH2, OutlinedButton } from "../../ui";
import { Container, Description, ImageWrapper, Wrapper } from "./TitleDescriptionCta.Styles";

type TitleDescriptionCtaProps = {
  textTitle: string;
  textDescription: string;
  textButton: string;
  srcImage: string;
}

export const TitleDescriptionCta: FC<TitleDescriptionCtaProps> = ({
  textTitle,
  textDescription,
  textButton,
  srcImage
}) => {
  return (
    <Container>
      <ImageWrapper>
        <img src={srcImage} height="22rem" width="100%" />
      </ImageWrapper>
      <Wrapper>
        <HeadlineH2 text={textTitle} textcolor="white" />
        <Description>{textDescription}</Description>
        <OutlinedButton text={textButton} />
      </Wrapper>
    </Container>
  )
}