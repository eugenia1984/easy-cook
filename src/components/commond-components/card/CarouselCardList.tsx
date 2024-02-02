import { FC } from "react";
import { CarouselCardType } from "../../../models";
import { CarouselCard } from "..";
import { CardsContainer, CarouselWrapper, SeeMoreContainer } from "./CarouselCardList.Styles";
import { Link } from "react-router-dom";

export type CarouselCardListProps = {
  cardsData: CarouselCardType[];
}

export const CarouselCardList: FC<CarouselCardListProps> = ({ cardsData }) => {
  return (
    <CarouselWrapper>
      <CardsContainer >
        {cardsData.map((card, index) => (
          <CarouselCard
            altImg={card.altImg}
            hrefLink={card.hrefLink}
            srcImg={card.srcImg}
            title={card.title}
            key={card.title + index}
          />
        ))}
        <SeeMoreContainer>
          <Link to="/">SEE MORE</Link>
        </SeeMoreContainer>
      </CardsContainer>
    </CarouselWrapper>
  )
}