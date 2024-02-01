import styled from "styled-components";

export const AppFooter = styled.footer`
  border-top: ${(props) => `2px solid ${props.theme.colors.darkGray}`};
  padding: 1.5rem 1rem;
`;

export const FooterWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.txtColorDisabled};
  padding-right: 12px;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 12px;
  }
`;

export const SpanLink = styled.span`
  padding: 12px;

  & > a {
    text-decoration: none;
  }

  & > a:hover {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: underline;
  }
`;
