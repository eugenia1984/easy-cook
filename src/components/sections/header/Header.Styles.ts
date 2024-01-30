import styled from "styled-components";

export const AppHeader = styled.header`
  padding: 1rem 0.5rem;
  background-color: var(--primary-background3);
  box-shadow: 0 2px 3px 0 var(--box-shadow-border);
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
  color: var(--primary);
  font-weight: 800;
  letter-spacing: 1px;
`;
