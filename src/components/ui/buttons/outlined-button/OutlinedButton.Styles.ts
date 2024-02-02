import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.colors.btnPrimary};
  background-color: #ffffffcf;
  border-radius: 7px;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 1.5rem;
  padding: 0.75rem 1rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  border: ${(props) => `3px solid ${props.theme.colors.btnPrimary}`};

  &:hover {
    color: ${(props) => props.theme.colors.primaryBackground3};
    background-color: ${(props) => props.theme.colors.borderHoverOutlined};
    border-color: ${(props) => props.theme.colors.borderHoverOutlined};
  }
`;
