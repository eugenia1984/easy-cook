import { RECIPES } from "../../../language"
import { CarouselCardList } from "../../commond-components"
import { HeadlineH2 } from "../../ui"
import { SliderContainer, TitleContainer } from "./LastREcipes.Styles"
import { cards } from "./constants"

export const LastRecipes = () => {
  return (
    <>
      <TitleContainer>
        <HeadlineH2 text={RECIPES.TITLE} />
      </TitleContainer>
      <SliderContainer>
        <CarouselCardList cardsData={cards} />
      </SliderContainer>
    </>
  )
}