import { FC } from "react";
import { Link } from "react-router-dom";
import { Container, ImageWrapper, Title } from "./CarouselCard.Styles";

type CarouselCardProps = {
  hrefLink: string;
  srcImg: string;
  altImg: string;
  title: string
}

export const CarouselCard: FC<CarouselCardProps> = ({
  hrefLink,
  srcImg,
  altImg,
  title
}) => {
  return (
    <Container>
      <Link to={hrefLink}>
        <ImageWrapper>
          <img src={srcImg} alt={altImg} width="100%" />
        </ImageWrapper>
        <Title>
          {title}
        </Title>
      </Link>
    </Container>
  )
}