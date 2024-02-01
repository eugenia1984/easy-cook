import { TitleDescriptionCta } from "../../commond-components";
import { Wrapper } from "./HomeSection.Styles";

import bgImage from "./../../../assets/recipes_pattern.jpg";

export const HomeSection = () => {
  return (
    <Wrapper>
      <TitleDescriptionCta
        textTitle="All recipes"
        textDescription="Thousands of recipes in Guided Cooking, developed and tested by our experts so that you get a perfect result"
        textButton="Discover"
        srcImage={bgImage}
      />
    </Wrapper>)
}