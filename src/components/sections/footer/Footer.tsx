import { useUserStore } from "../../../store";
import { YEAR } from "../../../utils";
import { NormalText } from "../../ui";
import { AppFooter } from "./Footer.Styles";

export const Footer = () => {
  const { isAuth } = useUserStore();
  return (
    <AppFooter>
      <NormalText text={`© ​Copyright ${YEAR.toString()}`} textColor="#B1B2B3" />
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

