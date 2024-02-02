import { TitleDescriptionCta } from "../../commond-components";
import { Wrapper } from "./HomeSection.Styles";

import bgImage from "./../../../assets/recipes_pattern.jpg";
import cake from "./../../../assets/gooseberry-cake.png";

import { BAKE, DISCOVER } from "./home-constants";

export const HomeSection = () => {
  return (
    <Wrapper>
      <TitleDescriptionCta
        textTitle={BAKE.TITLE}
        textDescription={BAKE.DESCRIPTION}
        textButton={BAKE.BUTTON}
        srcImage={cake}
      />
      <TitleDescriptionCta
        textTitle={DISCOVER.TITLE}
        textDescription={DISCOVER.DESCRIPTION}
        textButton={DISCOVER.BUTTON}
        srcImage={bgImage}
      />
    </Wrapper>)
}