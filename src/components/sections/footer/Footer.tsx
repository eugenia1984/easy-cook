import { Link } from "react-router-dom";
import { useUserStore } from "../../../store";
import { YEAR } from "../../../utils";
import { PRIVATE_ROUTES } from "../../../routes";
import { AppFooter, FooterWrapper, Span, SpanLink } from "./Footer.Styles";
import { FOOTER_LINKS } from "../../../language";

export const Footer = () => {
  const { isAuth } = useUserStore();

  return (
    <AppFooter>
      <FooterWrapper>
        <Span >
          {`${FOOTER_LINKS.COPYRIGHT}${YEAR.toString()}`}
        </Span>
        {
          isAuth &&
          <>
            <SpanLink>
              <Link to="/" aria-label="Home page">
                {FOOTER_LINKS.HOME}
              </Link>
            </SpanLink>
            <SpanLink>
              <Link to={PRIVATE_ROUTES.SEARCH} aria-label="Search page">
                {FOOTER_LINKS.SEARCH}
              </Link>
            </SpanLink>
            <SpanLink>
              <Link to={PRIVATE_ROUTES.CONTACT} aria-label="Contact page">
                {FOOTER_LINKS.CONTACT}
              </Link>
            </SpanLink>
          </>
        }
      </FooterWrapper>
    </AppFooter>
  )
};

