import styled from "styled-components";

export const AppHeader = styled.header`
  padding: 1rem 0.5rem;
  background-color: ${(props) => props.theme.colors.primaryBackground3};
  box-shadow: ${(props) => `0 2px 3px 0 ${props.theme.colors.boxShadowBorder}`};
  height: 3rem;
  max-width: 100vw;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 600;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Logo = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 800;
  letter-spacing: 2px;

  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }

  & > a:hover {
    text-decoration: underline;
  }
`;

export const LinksContainer = styled.div`
  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    margin: 0 12px;
    padding: 6px 9px;
    border-radius: 4px;
  }

  & > a:hover {
    text-decoration: underline;
    background-color: #8080804d;
  }
`;
