import { useUserStore } from "../../../store";
import { YEAR } from "../../../utils";
import { NormalText } from "../../ui";
import { AppFooter } from "./Footer.Styles";

export const Footer = () => {
  const { isAuth } = useUserStore();
  return (
    <AppFooter>
      <NormalText text={`© ​Copyright ${YEAR.toString()}`} textcolor="var(--txt-color-disabled)" />
      {
        isAuth &&
        <>
          <NormalText text="Search" />
          <NormalText text="Contact" />
        </>
      }
    </AppFooter>
  )
};

