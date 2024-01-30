import styled from "styled-components";

export const InputGroup = styled.div`
  padding: 1rem 0;
`;

export const Label = styled.label`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
  display: block;
  color: var(--txt-color-gray);
`;

export const Input = styled.input`
  background-color: var(--primary-background3);
  border: 1px solid var(--border-gray);
  border-radius: 4px;
  color: var(--txt-color-gray);
  line-height: 1.5rem;
  min-height: 3rem;
  padding: 0.25rem;
  width: 100%;

  &:focus: {
    outline: none;
    border-color: var(--border-focus);
  }
`;
