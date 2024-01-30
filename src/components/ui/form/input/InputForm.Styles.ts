import styled from "styled-components";

export const InputGroup = styled.div`
  padding: 1rem 0;
`;

export const Label = styled.label`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
  display: block;
  color: ${(props) => props.theme.colors.txtColorGray};
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.primaryBackground3};
  border: ${(props) => `1px solid ${props.theme.colors.borderGray}`};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.txtColorGray};
  line-height: 1.5rem;
  min-height: 3rem;
  padding: 0.25rem;
  width: 100%;

  &:focus: {
    outline: none;
    border-color: ${(props) => props.theme.colors.borderFocus};
  }
`;
