import { TitleDescriptionCta } from "../../commond-components"
import { Wrapper } from "./HomeSection.Styles"

export const HomeSection = () => {
  return (
    <Wrapper>
      <TitleDescriptionCta
        textTitle="All recipes"
        textDescription="Thousands of recipes in Guided Cooking, developed and tested by our experts so that you get a perfect result"
        textButton="Discover"
      />
    </Wrapper>)
}