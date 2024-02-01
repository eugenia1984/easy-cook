import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.colors.btnPrimary};
  background-color: transparent;
  border-radius: 4px;
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
  border: ${(props) => `1px solid ${props.theme.colors.btnPrimary}`};

  &:hover {
    border-color: ${(props) => props.theme.colors.borderHoverOutlined};
    color: ${(props) => props.theme.colors.borderHoverOutlined});
  }
`;
