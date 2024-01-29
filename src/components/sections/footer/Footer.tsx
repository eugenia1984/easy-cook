import { YEAR } from "../../../utils";
import { NormalText } from "../../ui";
import { AppFooter } from "./Footer.Styles";

export const Footer = () => {
  return (
    <AppFooter>
      <NormalText text={`© ​Copyright ${YEAR.toString()}`} />
    </AppFooter>
  )
};

