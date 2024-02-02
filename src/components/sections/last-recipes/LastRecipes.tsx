import { RECIPES } from "../../../language"
import { CarouselCard } from "../../commond-components"
import { HeadlineH2 } from "../../ui"
import { SliderContainer, TitleContainer } from "./LastREcipes.Styles"

export const LastRecipes = () => {
  return (
    <>
      <TitleContainer>
        <HeadlineH2 text={RECIPES.TITLE} />
      </TitleContainer>
      <SliderContainer>
        <CarouselCard
          hrefLink="/"
          srcImg="https://assets.tmecosys.com/image/upload/t_web378x315_a/img/recipe/ras/Assets/89722a66-d043-4827-aaf1-36878e0dbf84/Derivates/d5da0086-3153-4e54-b003-4fb5979c1261"
          altImg="Recipe"
          title="Lubina al horno al estilo italiano con dip de pimientos asados y ensalada de hinojo"
        />
      </SliderContainer>
    </>
  )
}