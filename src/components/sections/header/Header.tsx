import { Link } from "react-router-dom";
import { HEADER } from "../../../language";
import { useUserStore } from "../../../store";
import { AppHeader, HeaderContainer, LinksContainer, Logo } from "./Header.Styles";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../../../routes";

export const Header = () => {
  const { isAuth } = useUserStore();

  return (
    <AppHeader>
      <HeaderContainer>
        <Logo>
          <Link to={isAuth ? '/' : PUBLIC_ROUTES.LOGIN}>{HEADER.LOGO}</Link>
        </Logo>
        {isAuth && (
          <LinksContainer>
            <Link to={PRIVATE_ROUTES.SEARCH}>{HEADER.SEARCH}</Link>
            <Link to={PRIVATE_ROUTES.CONTACT}>{HEADER.CONTACT}</Link>
          </LinksContainer>
        )}
      </HeaderContainer>
    </AppHeader>
  )
};
