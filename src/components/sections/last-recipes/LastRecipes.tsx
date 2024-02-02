import { RECIPES } from "../../../language"
import { HeadlineH2 } from "../../ui"
import { SliderContainer, TitleContainer } from "./LastREcipes.Styles"

export const LastRecipes = () => {
  return (
    <>
      <TitleContainer>
        <HeadlineH2 text={RECIPES.TITLE} />
      </TitleContainer>
      <SliderContainer>

      </SliderContainer>
    </>
  )
}