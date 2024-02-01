import { Link } from "react-router-dom";
import { useUserStore } from "../../../store";
import { YEAR } from "../../../utils";
import { PRIVATE_ROUTES } from "../../../routes";
import { AppFooter, FooterWrapper, Span, SpanLink } from "./Footer.Styles";

export const Footer = () => {
  const { isAuth } = useUserStore();

  return (
    <AppFooter>
      <FooterWrapper>
        <Span >
          {`© ​Copyright ${YEAR.toString()}`}
        </Span>
        {
          isAuth &&
          <>
            <SpanLink>
              <Link to={PRIVATE_ROUTES.SEARCH} aria-label="Search page">
                Search
              </Link>
            </SpanLink>
            <SpanLink>
              <Link to={PRIVATE_ROUTES.CONTACT} aria-label="Contact page">
                Contact
              </Link>
            </SpanLink>
          </>
        }
      </FooterWrapper>
    </AppFooter>
  )
};

